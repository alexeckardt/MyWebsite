
interface ProjectProps extends React.HTMLAttributes<HTMLDivElement> {
    name: string;
    tags: string[];
    year: number | string;
    bgImage?: string;

    href?: string; // Link to project page

    allowZoom?: boolean
}

export const ExperimentCard: React.FC<ProjectProps> = ({ allowZoom, href, name, tags, bgImage, year, children, ...props }) => {

    const imgPath = bgImage ? bgImage : "/images/backgrounds/header_dark.png";
    const backgroundImage = `url('${imgPath}')`;

    // No Zoom if necessary
    return (
        <div className="w-96 bg-white dark:bg-royal-900 border border-royal-200 dark:border-royal-600 rounded-[10px] transition duration-200 p-4 shadow-lg">
            {/* Logo */}
            <a className="flex items-center flex-1 cursor-default" href={href} rel="noopener noreferrer" target='_blank'>
                <div
                    className={`w-full h-20 rounded-lg bg-black bg-center transition-[0.3s] bg-size-[100%] hover:bg-size-[110%]`}
                    style={{
                        backgroundImage: `url(${imgPath})`,
                    }}
                ></div>
            </a>

            <div className="flex flex-col justify-between min-h-[150px]">
                {/* Title */}
                <div className="flex items-center gap-1 mt-5 mb-2">
                    <a className="flex items-center flex-1" href={href} rel="noopener noreferrer" target='_blank'>
                        <h1 className="font-semibold font-funnel text-[1.4rem] text-[var(--textcol)] max-w-[90%] transition duration-100 hover:text-[var(--primary-p)] font-[var(--title_font_family)]">
                            {name}
                        </h1>
                    </a>
                    {year && (
                        <div className="text-base font-funnel font-light text-[var(--textcol-dark)] font-[var(--title_font_family)] flex-[0.2]">
                            {year}
                        </div>
                    )}
                </div>

                {/* Description */}
                {children}

                {/* Tags */}
                {/* <div className="flex flex-wrap gap-1">
                    {tags &&
                        tags.map((item, index) => (
                            <WorkExperienceTag key={index} item={item} />
                        ))}
                </div> */}
            </div>
        </div>
    );
};