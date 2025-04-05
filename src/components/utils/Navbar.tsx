

import Link from "next/link";

import { BlankProfilePic } from "@/app/assets";
import { createClient } from "@/utils/supabase/server";
import { Login, signOut } from "@/app/login/actions";
import { redirect } from "next/navigation";
import { getLoginUser } from "@/app/api/users/route";

const Navbar = async () => {
    const user = await (await getLoginUser()).json();

    return (
        <nav className="bg-slate-900 flex justify-between items-center py-3 px-24 text-white">
            <Link href="/">
                <h1>NextGoogle</h1>
            </Link>

            <div className="flex gap-x-2 items-center">
                <Link href="/dashboard">
                    Dashboard
                </Link>

                {user ? (
                    <>
                        <p>Phone: {user.phone}</p>
                        <p>Email: {user.email}</p>
                        <img
                            src={user.user_metadata?.url ? user.user_metadata?.url : BlankProfilePic.src}
                            alt="useer avatar"
                            className="w-10 h-10 rounded-full"
                        />
                        <button
                            className="bg-red-500 px-3 py-2 rounded"
                            onClick={signOut}
                        >
                            Log Out
                        </button>
                    </>
                )
                :
                (
                    <button
                        className="bg-sky-500 px-3 py-2 rounded"
                        onClick={() => redirect('/login')}
                    >
                        Sign in
                    </button>
                )}
                
            </div>
        </nav>
    );
};

export default Navbar;