

import { getAllUsers } from "@/app/api/users/route";
import StoreModal from "@/components/modals/store-modal";
import { ResponseMessageInterface } from "@/lib/interfaces";
import { NextResponse } from "next/server";

export default async function ModalProvider() {
    
    const checkIfStoreCreated = async () => {
        const stores : NextResponse<ResponseMessageInterface> = await (await getAllUsers()).json();
        console.log("users dashboard layout: ", stores);
        return stores;
    };

    const storeList : NextResponse<ResponseMessageInterface>  = await checkIfStoreCreated();

    return (
        <>
            <StoreModal params={storeList}/>
        </>
    );
};