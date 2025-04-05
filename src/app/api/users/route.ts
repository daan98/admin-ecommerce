import { CRUDEnum } from "@/lib/enum/crud.enum";
import { ResponseMessageInterface, UserInterface } from "@/lib/interfaces";
import { checkDatabaseEmptyValues } from "@/lib/utils";
import { createClient } from "@/utils/supabase/server";
import { PostgrestSingleResponse } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

export async function getAllUsers() : Promise<NextResponse<ResponseMessageInterface>> {
    const supabase = await createClient();
    const {data : users} : PostgrestSingleResponse<UserInterface[]> = await supabase.from("users").select();
    const result = checkDatabaseEmptyValues(users, CRUDEnum.RETRIEVE, "users");
    return NextResponse.json(result);
}

export async function getSingleUser(id: Number) : Promise<NextResponse<ResponseMessageInterface>> {
    const supabase = await createClient();
    const {data : user} : PostgrestSingleResponse<UserInterface[]> = await supabase.from("users").select();
    const result = checkDatabaseEmptyValues(user, CRUDEnum.RETRIEVE_SINGLE, "user");
    return NextResponse.json(result);
}

export async function deleteUser(id : Number) : Promise<NextResponse<ResponseMessageInterface>> {
    const supabase = await createClient();
    const {data : user} : PostgrestSingleResponse<UserInterface[]> = await supabase.from("users").delete().eq("id", id).select();
    const result = checkDatabaseEmptyValues(user, CRUDEnum.DELETE, "user");
    return NextResponse.json(result);
}

export async function createUser(userCreated : UserInterface) : Promise<NextResponse<ResponseMessageInterface>> {
    const supabase = await createClient();
    const {data : user} : PostgrestSingleResponse<UserInterface[]> = await supabase.from("users").insert(userCreated).select();
    const result = checkDatabaseEmptyValues(user, CRUDEnum.CREATED, "user");
    return NextResponse.json(result);
}

export async function updateUser(userUpdated : UserInterface, id : Number) : Promise<NextResponse<ResponseMessageInterface>> {
    const supabase = await createClient();
    const {data : user} : PostgrestSingleResponse<UserInterface[]> = await supabase.from("users").update(userUpdated).eq('id', id).select();
    const result = checkDatabaseEmptyValues(user, CRUDEnum.UPDATE, "user");
    return NextResponse.json(result);
}

export async function getLoginUser() : Promise<NextResponse<ResponseMessageInterface>> {
    const supabase = await createClient();
    const {data : {user}} = await supabase.auth.getUser();
    if(user) {
        return NextResponse.json({status: 200, message: `The user is Logged in.`, data: user});
    }
    return NextResponse.json({status: 500, message: `No user found.`, data: [],});
}