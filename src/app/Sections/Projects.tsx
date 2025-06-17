import { Project } from "@/components/project"

export const Projects = () => {
    return (
        <div className="w-11/12 lg:w-7/12 max-w-[1800px] flex flex-col items-start text-start justify-start p-8">
            <div className="font-funnel font-semibold text-3xl mb-5">Projects</div>

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
                        <div>
                            This was my final end-of-degree project, collaborated with some of the smartest people I know.
                        </div>
                        <div>
                            MeetingBot is an open-source meeting bot API that integrates with online meeting platforms like Zoom, Microsoft Teams, and Google Meet. Essentially, the meeting bots can join video calls and record audio, which can then be accessed programmatically through an API.
                        </div>
                        <div>
                            This project was a huge learning experience for me, as it was my first time working with a larger team of developers on a long-term project. I was responsible for Bot Development, as well as creating an example application.
                        </div>
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
                            Pinball Pioneer is a puzzle game, originally developed in 48 hours for the largest game jam in (at the time) Itch.io history.
                        </div>
                        <div>

                            The game was developed for the Game Maker's Tool Kit (GMTK) Game Jam in July 2023. The theme of the game jam was 'Roles Reversed' -- meaning that some aspect of the game was to be backwards in some way. After a week-long voting period, Pinball Pioneer finished Top 10 (7th) out of 7000 submissions.
                        </div>
                        <div>
                            Play as a little worker inside a pinball machine who's job is to design the board! Obviously, if the pinball-player wins the course then the pinball machine is too easy-- and the machine loses tokens! Use whatever you have available to you and make sure that the balls don't go into the holes!
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
                            A Game I've been passionately developing for 3 years, but currently on a hiatus do focus on my schooling.
                        </div>
                        <div>
                            The game boasts a captivating Metroidvania-style gameplay, allowing players to freely explore an expansive 2D environment. As players delve into the game, they will navigate through different areas teeming with enemies, while unraveling the mysteries of the main charachters backstory.
                        </div>
                        <div className='italic'>
                            "When Keira Eldrid arrives on the Old Continent, she finds herself in the midst of calamity: the return of ancient titans known as the Spirit Phoenixes. To prevent the destruction of the continent, she'll have to harness the power of new weapons and abilities by connecting with her inner self."
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
                        <div>
                            Using JavaScript and HTML, I built the viewer by leveraging the same public data sources utilized by companies like Google and Apple. This allowed me to create a geographically accurate representation of GO Transit's network, ensuring both precision and reliability in how routes and connections are displayed.
                        </div>
                        <div>
                            I'm very proud of how this prototype turned out, and hope to revisit this project again in the future and utilize what I've learned since making this first version.
                        </div>
                    </div>
                </Project >
            </div>
        </div >
    )
}