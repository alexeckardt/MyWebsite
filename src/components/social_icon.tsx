import React, { ReactNode } from 'react';

interface SocialIconProps extends React.HTMLAttributes<HTMLDivElement> {
    website?: string;
    icon?: string;
}

export const SocialIcon: React.FC<SocialIconProps> = ({ website, icon, ...props }) => {
    return (
        <a href={website} target="_blank" rel="noopener noreferrer">

            <div className={"text-black dark:text-light hover:text-neutral-700 dark:hover:text-neutral-300"}>
                {props.children}
            </div>
        </a>
    );
}