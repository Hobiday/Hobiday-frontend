import { useRouter } from "next/navigation";
import PlusCircle from "src/assets/icons/plus-circle.svg";
import ArrowBottom from "src/assets/icons/arrow-bottom.svg";

export default function AddInfo() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/"); // Adjust path as necessary
  };

  return (
    <div>
      <div className="p-3 flex items-center gap-x-2 h-12 border-b border-b-gray-100">
        <PlusCircle />
        <h3 className="text-sm font-semibold">추가정보 입력하기</h3>
        <h4 className="text-sm font-semibold text-gray-500">(선택)</h4>
        <button onClick={handleClick} className="ml-auto">
          <ArrowBottom />
        </button>
      </div>
    </div>
  );
}
