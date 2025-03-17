"use client";

import { useStoreModal } from "@/app/hooks/use-store-modal";
import Modal from "../utils/Modal";
import CreateStoreForm from "../forms/CreateStoreForm";

export default function StoreModal() {
    const storeModal = useStoreModal();

    console.log({storeModal})
    return (
        <Modal
            title="Create Store"
            description="Add new store to manage your products and categories"
            OnClose={storeModal.OnClose}
            isOpen={storeModal.isOpen}
        >
            <>
                <CreateStoreForm />
            </>
        </Modal>
    );
};