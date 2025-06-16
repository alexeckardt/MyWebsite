import { ExperimentCard } from '@/components/experiment_card';

export const Experiments = () => {
    return (
        <div className="w-11/12 lg:w-7/12 flex flex-col items-start text-start justify-start p-8 gap-y-5">
            <div className="font-funnel font-semibold text-3xl mb-5">Experiments</div>

            <ExperimentCard
                href="https://github.com/whabinski/ObesityClassificationModel"
                name="Obesity Risk Model"
                year="2024"
                tags={['PyTorch', 'Scikit-learn', 'Machine Learning', 'AI']}
            >
                <div className="font-funnel text-royal-800">
                    Regression model to predict risk of obesity based on various life-style choices. Project deliverable for an Applications of Machine Learning Course.
                </div>
            </ExperimentCard>
            <ExperimentCard
                href="https://github.com/alexeckardt/ChessOpenings"
                name="Chess Opening Explorer"
                bgImage="/images/projects/chessers.png"
                year="2023"
                tags={['GML', 'Stockfish', 'Algorithms', 'Big Data', 'Pixel Art']}
                allowZoom={false}>
                <div className="font-funnel text-royal-800">
                    Simple Puzzle Game that makes you choose the best move from a variety of chess openings.
                </div>
            </ExperimentCard>
            <ExperimentCard
                href="https://github.com/alexeckardt/Pixel-Art-Tile-Set-Completer"
                name="Pixel Art Tile-Set Extrapolator"
                bgImage="/images/projects/patsc.png"
                year="2023"
                tags={['Python', 'Bash']}
            >
                <div className="font-funnel text-royal-800">
                    Python Command Line Tool to extrapolate a tile-set from source image(s).
                </div>
            </ExperimentCard>
            <ExperimentCard
                href="https://gx.games/games/s3zosx/titanquest/"
                name="TitanQuest Game"
                bgImage="/images/projects/spaceapps_bkg.png"
                year="2023"
                tags={['GML', 'Group Project', 'NASA']}
            >
                <div className="font-funnel text-royal-800">
                    An interactive learning application for children, submitted for the NASA Space-Apps 2023 hackathon.
                </div>
            </ExperimentCard>
            <ExperimentCard
                href="https://github.com/alexeckardt/iOS-Speedrun-Timer/"
                name="iOS Speedrun Timer"
                bgImage="/images/projects/ios_speedrun.png"
                year="2022"
                tags={['SwiftUI', 'XCode', 'iOS Emulator']}
            >
                <div className="font-funnel text-royal-800">
                    iOS App, written in XCode & SwiftUI, to act as a timer to store and compare speedruns time to one another.
                </div>
            </ExperimentCard>
            <ExperimentCard
                href="https://github.com/alexeckardt/RougelikeDungeon"
                name="Rougelike Dungeon C# Game"
                bgImage="/images/projects/rougelikedungeon.png"
                year="2023"
                tags={['C#', 'XML', 'MonoGame']}
            >
                <div className="font-funnel text-royal-800">
                    A simple, randomly generated bullet hell video game, created using C# using the MonoGame Framework.
                </div>
            </ExperimentCard>
            <ExperimentCard
                href="https://github.com/alexeckardt/MyWebsite"
                name="Portfolio Website"
                year="2025"
                allowZoom={true}
                tags={['Astro', 'HTML', 'CSS', 'JS']}
            >

                <div className="font-funnel text-royal-800">
                    Inception! See the source code for this website.
                </div>
            </ExperimentCard>
        </div >
    )
}