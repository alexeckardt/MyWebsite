import { Project } from "@/components/project"

export const Projects = () => {
    return (

        <div className='relative w-full flex flex-col items-center'>
            <div className="flex flex-col items-start text-start justify-start">
                <div className="w-full flex flex-col gap-y-12 mt-2">
                    <Project
                        name={"MeetingBot"}
                        tagline={"Self-hosting Online meeting recording API"}
                        tags={['Docker', 'AWS', 'Terraform', 'Pupeteer']}
                        year={2025}
                        githubHref={'https://github.com/meetingbot/meetingbot'}
                        href={'https://meetingbot.tech'}
                    >

                        <div className="font-funnel dark:text-royal-300 flex flex-col gap-y-2 mb-2">
                            {/* <div>
                                This was my final end-of-degree project, collaborated with some of the smartest people I know.
                            </div> */}
                            <div>
                                MeetingBot is an open-source meeting bot API that integrates with online meeting platforms like Zoom, Microsoft Teams, and Google Meet. Bots can join video calls and record audio, which can then be accessed programmatically through an API.
                            </div>
                            {/* <div>
                                This project was a huge learning experience for me, as it was my first time working with a larger team of developers on a long-term project. I was responsible for Bot Development, as well as creating an example application.
                            </div> */}
                        </div>
                    </Project>

                    <Project
                        name={"Pinball Pioneer"}
                        tagline={"Top 10 Game of GMTK 2023 Game Jam"}
                        tags={['GML']}
                        year={2024}
                        bgImage={'pinball_highres.png'}
                        backgroundPositionY='35%'
                        itchHref="https://alexeckardt.itch.io/pinball-pioneer"
                    >
                        <div className="font-funnel dark:text-royal-300 flex flex-col gap-y-2 mb-2">
                            <div>
                                Pinball Pioneer is a puzzle game developed in 48 hours for the GMTK Game Jam in July 2023, where it finished Top 10 (7th) out of 7000 submissions, allowing players to design a pinball machine while ensuring the game remains challenging.
                            </div>
                        </div>
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
                        <div className="font-funnel dark:text-royal-300 flex flex-col gap-y-2 mb-2">
                            <div>
                                Soulflame is a Metroidvania-style game that I've been developing for 4+ years, currently on hiatus, featuring an expansive 2D environment where players unravel the main character's backstory amidst the return of ancient evils.
                            </div>
                        </div>
                    </Project>

                    <Project
                        name='GO Transit Viewer'
                        tagline='A simple web app to view GO Transit schedules' tags={['React', 'Next.js', 'TypeScript']}
                        year={2023}
                        bgImage={'gotransit_highres.png'}
                        backgroundPositionY="70%"
                        githubHref="https://github.com/alexeckardt/GO-Transit-Visualizer"
                        href="https://alexeckardt.github.io/GO-Transit-Visualizer/"
                    >
                        <div className="font-funnel dark:text-royal-300 flex flex-col gap-y-2 mb-2">
                            <div>
                                GO Transit Viewer is an interactive visual tool I developed to map all bus and train routes operated by GO Transit across Southern Ontario. My goal was to create an intuitive and user-friendly way for people to explore the region's extensive transit network.
                            </div>
                        </div>
                    </Project >
                </div>
            </div >
        </div >
    )
}