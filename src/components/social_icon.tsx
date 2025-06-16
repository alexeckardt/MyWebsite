import React, { ReactNode } from 'react';

interface SocialIconProps extends React.HTMLAttributes<HTMLDivElement> {
    website?: string;
    icon?: string;
}

export const SocialIcon: React.FC<SocialIconProps> = ({ website, icon, ...props }) => {
    return (
        <a href={website} target="_blank" rel="noopener noreferrer">

            <div className={props.className || "text-royal-100 hover:text-white"}>
                {props.children}
            </div>
        </a>
    );
}