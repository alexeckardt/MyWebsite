import { Project } from "@/components/project"

export const Projects = () => {
    return (

        <div className='w-full relative w-full flex flex-col items-center'>
            <div className="w-full flex flex-col items-start text-start justify-start">
                <div className="w-full flex flex-col gap-y-8 mt-2">

                    <Project
                        name={"Soulflame"}
                        tagline={"Solo-developed Action Adventure Game"}
                        tags={['GML']}
                        year={2025}
                        bgImage={'soulflame_highres.png'}
                        itchHref="https://alexeckardt.itch.io/soulflame"
                        href="https://soulflamegame.com"
                        backgroundPositionY='0%'
                    >
                    </Project>

                    <Project
                        name={"MeetingBot"}
                        tagline={"Self-hosting Online meeting recording API"}
                        tags={['Docker', 'AWS', 'Terraform', 'Pupeteer']}
                        year={2025}
                        githubHref={'https://github.com/meetingbot/meetingbot'}
                        href={'https://meetingbot.tech'}
                    >
                    </Project>

                    <Project
                        name={"Pinball Pioneer"}
                        tagline={"Top 10 Game of GMTK 2023 Game Jam"}
                        tags={['GML']}
                        year={2024}
                        bgImage={'pinball_highres.png'}
                        backgroundPositionY='35%'
                        itchHref="https://alexeckardt.itch.io/pinball-pioneer"
                        blogurl="/blog/pinball-pioneer"
                    >
                    </Project>
                    <Project
                        name={"Soulflame (Alpha)"}
                        tagline={"Solo-developed Action Adventure Game"}
                        tags={['GML']}
                        year={2023}
                        bgImage={'soulflame_highres.png'}
                        itchHref="https://alexeckardt.itch.io/soulflamealpha"
                        backgroundPositionY='50%'
                    >
                    </Project>

                    <Project
                        name='GO Transit Viewer'
                        tagline='A simple web app to view GO Transit schedules' tags={['React', 'Next.js', 'TypeScript']}
                        year={2023}
                        bgImage={'gotransit_highres.png'}
                        backgroundPositionY="70%"
                        githubHref="https://github.com/alexeckardt/GO-Transit-Visualizer"
                        href="https://alexeckardt.github.io/GO-Transit-Visualizer/"
                        blogurl="/blog/go-transit-viewer"
                    >
                    </Project >
                </div>
            </div >
        </div >
    )
}