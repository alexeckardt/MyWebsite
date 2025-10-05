import { ReactNode } from "react";

export const AppShell = ({ children, ...props }: any) => {

    return (
        <>
            {/* Top Bar */}
            <div className="h-1/4 w-full -z-1 overflow-hidden bg-[url(/images/backgrounds/header_dark.png)] bg-bottom bg-cover fixed top-0 left-0"></div>


            {/* Body */}
            <div className="bg-background w-full mt-24">
                <div className="flex flex-col w-full max-w-[65ch] mx-12 lg:mx-auto pt-12 lg:mt-10">
                    {/* Header */}
                    <></>

                    {children}
                </div>
            </div>
        </>
    )
}   