import { ReactNode } from "react";
import { AppShell } from "./AppShell";
import Image from "next/image";

export const BlogPostShell = ({ children, metadata, videoUrl, imageUrl, ...props }: any) => {

    let { title, description, date } = metadata;
    date = new Date(date).toLocaleDateString();

    return (
        <AppShell>
            <a className="flex items-center text-gray-200 dark:text-gray-700 hover:text-gray-300 -ml-4" href="/">...home </a>

            <div className="flex flex-col gap-0">
                <h1 className='text-5xl font-sans font-semibold'>{title}</h1>
                <h4 className='font-sans font-base text-xl mb-6'>{date}</h4>
                <h2 className='font-sans font-base text-xl mb-6'>{description}</h2>
            </div>

            {videoUrl &&
                <iframe
                    src={videoUrl}
                    className="youtube-video"
                ></iframe>
            }

            {imageUrl &&
                <Image src={imageUrl}
                    alt={title}
                    width={800}
                    height={400}
                    className="rounded-lg mb-5 shadow-lg cover" />
            }

            <div className="blog w-full">
                {children}
            </div>

            <p className="mt-5 mb-20">Alex Eckardt <a href="https://x.com/pixeqla">@pixeqla</a></p>
        </AppShell>
    )
}   