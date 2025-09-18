import { ReactNode } from "react";
import { AppShell } from "./AppShell";

export const BlogPostShell = ({ children, title, date, videoUrl, ...props }: any) => {

    return (
        <AppShell>

            <a className="mb-5 md:-ml-5 text-gray-400 hover:text-gray-300" href="/blog">back</a>

            <div className="flex flex-col gap-0">
                <h1 className='text-5xl font-sans font-semibold'>{title}</h1>
                <h2 className='font-sans font-base text-xl mb-6'>{date}</h2>
            </div>

            {videoUrl &&
                <iframe
                    src={videoUrl}
                    className="youtube-video"
                ></iframe>
            }

            <div className="blog w-full">
                {children}
            </div>

            <p className="mt-5 mb-20">Alex Eckardt <a href="https://x.com/pixeqla">@pixeqla</a></p>
        </AppShell>
    )
}   