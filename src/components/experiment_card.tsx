
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
        <div
            className="w-full min-h-32 bg-royal-900 border border-royal-600 rounded-lg shadow-xl overflow-hidden hover:bg-size-[105%] bg-size-[100%] bg-center transition-[0.3s]"
            style={{ backgroundImage }}
        >
            <div id='glass-plane' className="w-full min-h-32 h-full overflow-hidden lg:opacity-0 lg:transition-[0.3] backdrop-blur-[10px] lg:backdrop-blur-[0px] lg:hover:backdrop-blur-[10px] lg:hover:opacity-100 bg-white/30 lg:bg-transparent lg:hover:bg-white/30">

                <div className='p-5'>
                    <a className="w-fit flex items-center text-black hover:text-royal-900 hover:underline active:text-royal-950" href={href}>
                        <div className='w-fit font-funnel text-3xl font-semibold mb-1'>{name}</div>
                    </a>
                    {children}
                </div>

            </div>
        </div>
    )
};