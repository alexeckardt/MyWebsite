import React, { ReactNode } from 'react';

interface GlassProps extends React.HTMLAttributes<HTMLDivElement> {
}

export const Glass: React.FC<GlassProps> = ({ children, className }) => {
    return (
        <div className={'bg-white/20 backdrop-blur-[15px] border-white/30 rounded-lg shadow-lg border border-black ' + className}>
            {children}
        </div>
    );
}