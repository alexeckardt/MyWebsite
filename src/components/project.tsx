import React, { ReactNode } from 'react';
import { SocialIcon } from './social_icon';

interface ProjectProps extends React.HTMLAttributes<HTMLDivElement> {
    name: string;
    tagline: string;
    tags: string[];
    year: number | string;
    bgImage?: string;

    href?: string; // Link to project page
    githubHref?: string;
    itchHref?: string;
    backgroundPositionY?: string;
}

export const Project: React.FC<ProjectProps> = ({ name, tagline, tags, bgImage, year, backgroundPositionY, children, ...props }) => {


    const bgClass = `h-32 w-full overflow-hidden bg-bottom`;
    const backgroundImage = bgImage ? `url('/images/projects/${bgImage}')` : 'url("/images/backgrounds/header_dark.png")';

    // Link for the Project Title, if applicable
    const link = props.href || props.githubHref || props.itchHref;



    console.log(bgClass, backgroundImage);
    return (
        <div className="flex overflow-hidden relative items-start justify-start flex flex-col gap-y-2 w-full border-l border-r border-b rounded-lg border-royal-200 dark:border-royal-600 shadow-lg bg-white dark:bg-royal-900">
            <div className={bgClass} style={{ backgroundImage, backgroundSize: 'cover', backgroundPositionY }}></div>

            <div className="absolute top-1 right-1 flex flex-row gap-x-1">
                {
                    props.githubHref &&
                    <div className="p-1 bg-white/10 hover:bg-white/20 active:bg-black/20 shadow-xl backdrop-blur-[10px] rounded-full">
                        <SocialIcon website={props.githubHref}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                className="w-7 h-7"
                            >
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.263.793-.587 0-.287-.012-1.237-.018-2.243-3.338.725-4.042-1.613-4.042-1.613-.546-1.387-1.333-1.755-1.333-1.755-1.09-.744.082-.729.082-.729 1.205.087 1.84 1.237 1.84 1.237 1.07 1.832 2.807 1.302 3.492.995.107-.775.42-1.302.763-1.602-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.467-2.382 1.237-3.222-.123-.303-.536-1.523.117-3.176 0 0 1.01-.323 3.3 1.23a11.52 11.52 0 013.003-.403c1.02.005 2.047.137 3.003.403 2.29-1.553 3.3-1.23 3.3-1.23.653 1.653.24 2.873.117 3.176.77.84 1.237 1.912 1.237 3.222 0 4.61-2.807 5.625-5.48 5.92.432.372.817 1.102.817 2.222 0 1.606-.015 2.902-.015 3.293 0 .323.192.705.8.587C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
                            </svg>
                        </SocialIcon>
                    </div>
                }
                {
                    props.itchHref &&
                    <div className="p-1 bg-white/10 hover:bg-white/20 active:bg-black/20 shadow-xl backdrop-blur-[10px] rounded-full">
                        <SocialIcon website={props.itchHref}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                fill='currentColor'
                                className='w-7 h-7'
                            >
                                <path d="M71.9 34.8C50.2 47.7 7.4 96.8 7 109.7v21.3c0 27.1 25.3 50.8 48.3 50.8 27.6 0 50.5-22.9 50.5-50 0 27.1 22.2 50 49.8 50s49-22.9 49-50c0 27.1 23.6 50 51.2 50h.5c27.6 0 51.2-22.9 51.2-50 0 27.1 21.5 50 49 50s49.8-22.9 49.8-50c0 27.1 23 50 50.5 50 23 0 48.3-23.8 48.3-50.8v-21.3c-.4-12.9-43.2-62.1-64.9-75C372.6 32.4 325.8 32 256 32S91.1 33.1 71.9 34.8zm132.3 134.4c-22 38.4-77.9 38.7-99.9 .3-13.2 23.1-43.2 32.1-56 27.7-3.9 40.2-13.7 237.1 17.7 269.2 80 18.7 302.1 18.1 379.8 0 31.7-32.3 21.3-232 17.8-269.2-12.9 4.4-42.9-4.6-56-27.7-22 38.5-77.9 38.1-99.9-.2-7.1 12.5-23.1 28.9-51.8 28.9a57.5 57.5 0 0 1 -51.8-28.9zm-41.6 53.8c16.5 0 31.1 0 49.2 19.8a436.9 436.9 0 0 1 88.2 0C318.2 223 332.9 223 349.3 223c52.3 0 65.2 77.5 83.9 144.5 17.3 62.2-5.5 63.7-34 63.7-42.2-1.6-65.5-32.2-65.5-62.8-39.3 6.4-101.9 8.8-155.6 0 0 30.6-23.3 61.2-65.5 62.8-28.4-.1-51.2-1.6-33.9-63.7 18.7-67 31.6-144.5 83.9-144.5zM256 270.8s-44.4 40.8-52.4 55.2l29-1.2v25.3c0 1.6 21.3 .2 23.3 .2 11.7 .5 23.3 1 23.3-.2v-25.3l29 1.2c-8-14.5-52.4-55.2-52.4-55.2z" /></svg>
                        </SocialIcon>
                    </div>
                }
                {
                    props.href &&
                    <div className="p-1 bg-white/10 hover:bg-white/20 active:bg-black/20 shadow-xl backdrop-blur-[10px] rounded-full">
                        <SocialIcon website={props.href}>
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-7 h-7' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                                <path d="M14 3h7v7" />
                                <path d="M10 14L21 3" />
                                <path d="M21 21H3V3" />
                            </svg>
                        </SocialIcon>
                    </div>
                }
            </div>


            <div className="px-5 mt-3">
                <div className="flex flex-col sm:flex-row w-full justify-between items-end">

                    <div className='w-full md:w-fit font-funnel flex flex-col md:flex-row items-start md:items-end justify-start md:justify-end gap-x-4'>
                        <div className="text-2xl font-semibold">

                            {
                                link 
                                ?
                                <a href={link} target='_blank' rel="noopener noreferrer" className='hover:text-royal-200 active:text-royal-500 hover:underline'>
                                    {name}
                                </a>
                                :
                                name
                            }

                        </div>
                        <div className="text-lg font-light text-royal-600 dark:text-royal-400">{tagline}</div>
                    </div>

                    <div className="font-funnel font-light text-royal-400 dark:text-royal-500">
                        {year}
                    </div>
                </div>

                <div className="pb-1 mt-5 mb-3">
                    {children}
                </div>
            </div>
        </div>
    );
}