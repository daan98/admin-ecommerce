"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import { LoginFormInterface } from "@/lib/interfaces";

export async function Login(formData: FormData) {
    const supabase = await createClient();

    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    };

    const { error } = await supabase.auth.signInWithPassword(data);

    console.log("data: ", data);
    if (error) {
        console.log("ENTRANDO EN EL ERROR DE LOGIN");
        console.log("error: ", error);
        redirect('/error');
    }

    console.log("TODO SALIO BIEN REDIRIGIENDO AL DASHBOARD EN EL LOGIN");
    revalidatePath('/', 'layout');
    redirect('/dashboard');
};

export async function SingUp(formData : FormData) {
    const supabase = await createClient();
    
    const data = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    };

    const { error } = await supabase.auth.signUp(data);
    console.log("data: ", data);
    
    if (error) {
        console.log("ENTRANDO EN EL ERROR DE SING UP");
        console.log("error: ", error);
        redirect('/error');
    }

    console.log("TODO SALIO BIEN REDIRIGIENDO AL DASHBOARD EN EL SIGN UP");
    revalidatePath('/', 'layout');
    redirect('/dashboard');
};

export async function signOut() {
    const supabase = await createClient();

    const { error } = await supabase.auth.signOut();

    if (error) {
        redirect('/error');
    }

    console.log("TODO SALIO BIEN. REDIRIGIENDO AL LOGIN EN EL SIGN OUT");
    revalidatePath('/', "layout");
    redirect('/login');
}