import React, { ReactNode } from 'react';

interface SocialIconProps extends React.HTMLAttributes<HTMLDivElement> {
    website?: string;
    icon?: string;
}

export const SocialIcon: React.FC<SocialIconProps> = ({ website, icon, ...props }) => {
    return (
        <a href={`https://${website}`} target="_blank" rel="noopener noreferrer" className={props.className}>

            <div className="dark:text-royal-100 dark:hover:text-white text-royal-800 hover:text-royal-500">
                {props.children}
            </div>
        </a>
    );
}