import { CRUDEnum } from "@/lib/enum/crud.enum";
import { ResponseMessageInterface, UserInterface } from "@/lib/interfaces";
import { checkDatabaseEmptyValues } from "@/lib/utils";
import { createClient } from "@/utils/supabase/server";
import { PostgrestSingleResponse } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

export async function getAllUsers() : Promise<NextResponse<ResponseMessageInterface>> {
    const supabase = await createClient();
    const {data : users} : PostgrestSingleResponse<UserInterface[]> = await supabase.from("users").select();
    return checkDatabaseEmptyValues(users, CRUDEnum.RETRIEVE, "users");
}

export async function getSingleUser(id: Number) : Promise<NextResponse<ResponseMessageInterface>> {
    const supabase = await createClient();
    const {data : user} : PostgrestSingleResponse<UserInterface[]> = await supabase.from("users").select();
    return checkDatabaseEmptyValues(user, CRUDEnum.RETRIEVE_SINGLE, "user");
}

export async function deleteUser(id : Number) : Promise<NextResponse<ResponseMessageInterface>> {
    const supabase = await createClient();
    const {data : user} : PostgrestSingleResponse<UserInterface[]> = await supabase.from("users").delete().eq("id", id).select();
    return checkDatabaseEmptyValues(user, CRUDEnum.DELETE, "user");
}

export async function createUser(userCreated : UserInterface) : Promise<NextResponse<ResponseMessageInterface>> {
    const supabase = await createClient();
    const {data : user} : PostgrestSingleResponse<UserInterface[]> = await supabase.from("users").insert(userCreated).select();
    return checkDatabaseEmptyValues(user, CRUDEnum.CREATED, "user");
}

export async function updateUser(userUpdated : UserInterface, id : Number) : Promise<NextResponse<ResponseMessageInterface>> {
    const supabase = await createClient();
    const {data : user} : PostgrestSingleResponse<UserInterface[]> = await supabase.from("users").update(userUpdated).eq('id', id).select();
    return checkDatabaseEmptyValues(user, CRUDEnum.UPDATE, "user");
}