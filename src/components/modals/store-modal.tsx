"use client";

import { useEffect, useState } from "react";

import { useStoreModal } from "@/app/hooks/use-store-modal";
import Modal from "../utils/Modal";
import CreateStoreForm from "../forms/CreateStoreForm";
import { NextResponse } from "next/server";
import { ResponseMessageInterface } from "@/lib/interfaces";

export default function StoreModal({params} : {params : NextResponse<ResponseMessageInterface>}) {
    const storeModal = useStoreModal();
    const [stores, setStores] = useState([]);

    useEffect(() => {
        console.log({params});
    }, []);
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