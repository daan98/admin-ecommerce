import { CRUDEnum } from "@/lib/enum/crud.enum";
import { ResponseMessageInterface, StoreInterface } from "@/lib/interfaces";
import { checkDatabaseEmptyValues } from "@/lib/utils";
import { createClient } from "@/utils/supabase/server"
import { PostgrestSingleResponse } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const supabase = await createClient();
export async function getAllStores() : Promise<NextResponse<ResponseMessageInterface>> {
    const { data : stores } : PostgrestSingleResponse<StoreInterface[]>  =  await supabase.from("stores").select();
    const result = checkDatabaseEmptyValues(stores, CRUDEnum.RETRIEVE, "stores");
    return NextResponse.json(result);
}

export async function getSingleStore(id : Number) : Promise<NextResponse<ResponseMessageInterface>> {
    const { data : store } : PostgrestSingleResponse<StoreInterface[]> = await supabase.from("stores").select().eq("id", id);
    const result = checkDatabaseEmptyValues(store, CRUDEnum.RETRIEVE, "store");
    return NextResponse.json(result);
}

export async function deleteStore(id : Number) : Promise<NextResponse<ResponseMessageInterface>> {
    const { data : store } : PostgrestSingleResponse<StoreInterface[]> = await supabase.from("stores").delete().eq("id", id).select();
    const result = checkDatabaseEmptyValues(store, CRUDEnum.RETRIEVE, "store");
    return NextResponse.json(result);
}

export async function createStore(storeCreated : StoreInterface) : Promise<NextResponse<ResponseMessageInterface>> {
    const { data : newStore } : PostgrestSingleResponse<StoreInterface[]> = await supabase.from("stores").insert(storeCreated).select();
    const result = checkDatabaseEmptyValues(newStore, CRUDEnum.RETRIEVE, "store");
    return NextResponse.json(result);
}

export async function updateStore(storeUpdated : StoreInterface, id : Number) : Promise<NextResponse<ResponseMessageInterface>> {
    const {data : store} : PostgrestSingleResponse<StoreInterface[]> = await supabase.from("stores").update(storeUpdated).select();
    const result = checkDatabaseEmptyValues(store, CRUDEnum.RETRIEVE, "store");
    return NextResponse.json(result);
}