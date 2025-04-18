import { saveImageFile, uploadFileToPresignedUrl } from "@/apis/feed-api";
import { useState } from "react";

interface PresignedURLResponse {
  presignedUrl: string;
  fileUrl: string; // 실제 저장된 파일 URL
}

interface UseImageUploadReturn {
  uploadImages: (file: File[]) => Promise<string[]>; // 서버에 저장된 파일 URL 반환
  isLoading: boolean;
  error: string | null;
}

const useImageUpload = (): UseImageUploadReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getAccessToken = (): string | null => {
    return localStorage.getItem("accessToken");
  };

  const uploadImages = async (files: File[]): Promise<string[]> => {
    try {
      setIsLoading(true);
      setError(null);

      const accessToken = getAccessToken();

      if (!accessToken) {
        throw new Error("Access token not found");
      }

      const uploadedUrls: string[] = [];

      for (const file of files) {
        // 1. Presigned URL 요청
        const imageData = {
          prefix: file.type,
          fileName: file.name,
        };

        const data = await saveImageFile(imageData);
        const { url: presignedUrl, filePath: fileUrl } = data;

        if (!presignedUrl) {
          console.error("Presigned URL is undefined");
          throw new Error("Failed to retrieve presigned URL from server.");
        }

        // 2. Presigned URL로 파일 업로드
        await uploadFileToPresignedUrl(presignedUrl, file);

        uploadedUrls.push(fileUrl);
      }

      // 3. 파일 업로드 성공 시 서버에 저장된 파일 URL 반환
      return uploadedUrls;
    } catch (err: any) {
      setError(err.message || "Failed to upload image");
      throw new Error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    uploadImages,
    isLoading,
    error,
  };
};

export default useImageUpload;
