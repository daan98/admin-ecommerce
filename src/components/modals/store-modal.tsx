"use client";

import { useStoreModal } from "@/app/hooks/use-store-modal";
import Modal from "../utils/Modal";

export default function StoreModal() {
    const storeModal = useStoreModal();

    return (
        <Modal
            title="Create Store"
            description="Add new store to manage your products and categories"
            OnClose={storeModal.OnClose}
            isOpen={storeModal.isOpen}
        >
            Create Form will be here.
        </Modal>
    );
};