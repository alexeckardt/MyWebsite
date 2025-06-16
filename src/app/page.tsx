import Image from "next/image";
import { Welcome } from "./Sections/Welcome";
import { WorkExperience } from "./Sections/WorkExperience";
import { Projects } from "./Sections/Projects";
import { Experiments } from "./Sections/Experiments";
import { Background } from "./Background";

export default function Home() {
  return (
      <div className="items-center justify-items-center min-h-screen sm:m-10 mb-20 xl:mx-30 gap-16 bg-royal-50 dark:bg-royal-950 shadow-xl sm:rounded-lg overflow-hidden">

        <Background />

        <Welcome />



        <WorkExperience />
        <Projects />
        <Experiments />

      </div>
  );
}
