"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

import { BlankProfilePic } from "@/app/assets";

const Navbar = () => {
    const {data: session} = useSession();
    console.log("session: " , session);
    console.log({BlankProfilePic})
    return (
        <nav className="bg-slate-900 flex justify-between items-center py-3 px-24 text-white">
            <Link href="/">
                <h1>NextGoogle</h1>
            </Link>

            <div className="flex gap-x-2 items-center">
                <Link href="/dashboard">
                    Dashboard
                </Link>

                {session ? (
                    <>
                        <p>Name: {session.user?.name}</p>
                        <p>Email: {session.user?.email}</p>
                        <img
                            src={session.user?.image ? session.user?.image : BlankProfilePic.src}
                            alt="useer avatar"
                            className="w-10 h-10 rounded-full"
                        />
                        <button
                            className="bg-red-500 px-3 py-2 rounded"
                            onClick={async () => {
                                await signOut({
                                    callbackUrl: "/"
                                })
                            }}
                        >
                            Log Out
                        </button>
                    </>
                )
                :
                (
                    <button
                        className="bg-sky-500 px-3 py-2 rounded"
                        onClick={() => signIn()}
                    >
                        Sign in
                    </button>
                )}
                
            </div>
        </nav>
    );
};

export default Navbar;