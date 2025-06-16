import React, { ReactNode } from 'react';

interface WorkExperienceItemProps extends React.HTMLAttributes<HTMLDivElement> {
    company: string;
    title: string;
    year?: string | number;
    iconClass: string;
}

export const WorkExperienceItem: React.FC<WorkExperienceItemProps> = ({ year, company, title, iconClass, children }) => {
    return (
        <div className="items-start justify-start flex flex-col gap-y-2 w-full border-b pb-2 border-royal-200 dark:border-royal-700">

            <div className="w-full flex justify-between items-center">

                <div className="gap-x-2 flex justify-center items-center">

                    <div className={iconClass}></div>

                    <div className="flex flex-col">
                        <div className="font-funnel text-xl text-royale-900 dark:text-royale-50 font-semibold">
                            {title}
                        </div>
                        <div className="font-funnel font-light text-royal-500 dark:text-royal-400">
                            {company}
                        </div>
                    </div>

                </div>

                <div className="font-funnel font-light text-royal-400 dark:text-royal-500">
                    {year}
                </div>
            </div>
            <div className="mt-2 dark:text-royal-300">
                {children}
            </div>
        </div>
    );
}