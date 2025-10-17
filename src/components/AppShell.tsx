import { ReactNode } from "react";
import Image from "next/image";
import Favicon from "../../public/favicon.png";

export const AppShell = ({ children, ...props }: any) => {

    return (
        <>
            {/* Top Bar */}
            <div className="h-1/4 w-full -z-1 overflow-hidden bg-[url(/images/backgrounds/header_dark.png)] bg-bottom bg-cover fixed top-0 left-0"></div>

            {/* Body */}
            <div className="bg-background w-full mt-24">

                <Image
                    src={Favicon}
                    alt="Favicon"
                    width={Favicon.width}
                    height={Favicon.height}
                    unoptimized
                    className="relative -top-[26px] left-2 lg:left-12"
                />

                <div className="flex flex-col w-full max-w-[65ch] mx-12 lg:mx-auto pt-12 lg:mt-10">
                    {/* Header */}
                    <></>

                    {children}
                </div>
            </div>
        </>
    )
}   