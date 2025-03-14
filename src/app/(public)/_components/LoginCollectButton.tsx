"use client";

import LogButton from "@/app/components/button/logButton";
import Link from "next/link";
import { useState } from "react";

export default function LoginCollectButton() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <>
            <div className="block mt-5 md:hidden">
                <div className="flex  mx-6 items-center gap-5">
                    <p className="text-midnightBlue text-md">{'Vous êtes collecteur ?'}</p>
                    <Link
                        href="/login"
                        onClick={handleClick}
                        className="flex justify-center mt-1"
                    >
                        <LogButton label="SE CONNECTER" />
                    </Link>
                </div>
            </div>
        </>
    )
}