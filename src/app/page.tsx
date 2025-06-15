import Image from "next/image";
import { Welcome } from "./Sections/Welcome";
import { WorkExperience } from "./Sections/WorkExperience";
import { Projects } from "./Sections/Projects";
import { Experiments } from "./Sections/Experiments";
import { Background } from "./Background";

export default function Home() {
  return (
    <body className='bg-royal-200 dark:bg-royal-950'>
      <div className="items-center justify-items-center min-h-screen m-8 mb-20 gap-16 sm:m-20 bg-royal-100 dark:bg-royal-900 shadow-lg rounded-lg overflow-hidden">

        <Background />

        <Welcome />



        <WorkExperience />
        <Projects />
        <Experiments />

      </div>
    </body>
  );
}
