import Icon from "@/components/commons/icon";
import DotsVertical from "@/assets/icons/dots-vertical.svg";
import { useRef, useState } from "react";
import Modal from "@/components/modal";
import { useModal } from "@/contexts";
import useModalStore from "@/stores/useModalStore";

export default function FeedMenuModal() {
  const { open, close } = useModal();
  const isDeleteConfirmModalOpen = useModalStore((state) => state.isDeleteConfirmModalOpen);
  const setDeleteConfirmModalOpen = useModalStore((state) => state.setDeleteConfirmModalOpen);

  const handleDeleteClick = () => {
    setDeleteConfirmModalOpen(true);
    // 피드 등록 페이지로 이동, 해당 피드 값 들고 있어야 함
  };

  const handleCloseDeleteConfirm = () => {
    setDeleteConfirmModalOpen(false);
    close();

    // 피드 삭제 API 연결
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <Modal>
          <Modal.Title>피드를 수정/삭제하시겠어요?</Modal.Title>
          <Modal.Buttons>
            <button onClick={close} className="w-full px-4 py-2 bg-primary text-white rounded-lg">
              수정
            </button>
            <button onClick={handleDeleteClick} className="w-full px-4 py-2 text-gray-700 rounded-lg">
              삭제
            </button>
          </Modal.Buttons>
        </Modal>
      </div>

      <div className="flex items-center justify-center">
        {isDeleteConfirmModalOpen && (
          <Modal>
            <>
              <Modal.Title>정말 삭제하시겠어요?</Modal.Title>
              <Modal.Buttons>
                <button
                  onClick={handleCloseDeleteConfirm}
                  className="w-full px-4 py-2 bg-primary text-white rounded-lg"
                >
                  취소
                </button>
                <button onClick={handleCloseDeleteConfirm} className="w-full px-4 py-2 text-gray-700 rounded-lg">
                  삭제
                </button>
              </Modal.Buttons>
            </>
          </Modal>
        )}
      </div>

      <button onClick={open} className="cursor-pointer">
        <Icon alt="menu" size={24}>
          <DotsVertical />
        </Icon>
      </button>
    </>
  );
}
