import { getAllUsers } from "@/app/api/users/route";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { signOut } from "@/app/login/actions";

const layout = async () => {
    /* 
    TODO: [ ] Create a layout for the dashboard page
    TODO: [ ] CHECK IF THE USER IS LOGGED IN, IF NOT REDIRECT TO LOGIN PAGE
    TODO: [ ] RETRIEVE STORE INFORMATION, BASED ON THE STORE ID, IF DOESN'T EXIST REDIRECT TO HOME PAGE
    TODO: [ ] DISPLAY STORE INFORMATION
     */

    const supabase = await createClient();

    const { data, error } = await supabase.auth.getUser();

    if(error || !data.user) {
        redirect('/login');
    }

    console.log("supabase auth data: ", data);

    return (
        <>
            <div>dashboard layout {data.user.email}</div>
            <button onClick={signOut}>Sign Out</button>
        </>
    )
}

export default layout