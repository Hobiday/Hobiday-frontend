import React from "react";

export default function ProfileStats() {
  return (
    <>
      {/* 통계 정보 */}
      <div className="flex justify-center items-center mb-6 space-x-10">
        <div className="text-center">
          <p className="text-base font-semibold text-gray-500">포스트</p>
          <p>999</p>
        </div>
        <div className="h-6 w-px bg-gray-300 mx-4"></div>
        <div className="text-center">
          <p className="text-base font-semibold text-gray-500">팔로워</p>
          <p>2K</p>
        </div>
        <div className="h-6 w-px bg-gray-300 mx-4"></div>
        <div className="text-center">
          <p className="text-base font-semibold text-gray-500">팔로잉</p>
          <p>1K</p>
        </div>
      </div>
    </>
  );
}
