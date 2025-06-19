import Image from "next/image";
import { Welcome } from "./Sections/Welcome";
import { WorkExperience } from "./Sections/WorkExperience";
import { Projects } from "./Sections/Projects";
import { Experiments } from "./Sections/Experiments";
import { SocialIcon } from "@/components/social_icon";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen sm:m-10 mb-20 xl:mx-30 gap-16 bg-royal-50 dark:bg-royal-950 shadow-xl sm:rounded-lg overflow-hidden">

      <Welcome />

      <div className="h-80 w-11/12 lg:w-7/12 max-w-[1800px] shadow-lg  dark:rounded-lg bg-cover bg-[url(/images/backgrounds/valley.png)]"
        style={{ imageRendering: 'pixelated' }}></div>
      <div className='w-11/12 lg:w-7/12 max-w-[1800px] font-funnel text-sm'>I also do pixel art!</div>

      <WorkExperience />
      <Projects />
      <Experiments />

      <div className="py-25 flex flex-col font-funnel gap-2 items-center justify-center text-center">
        CV
        <SocialIcon website="/Alexander_Eckardt_Website_Resume.pdf" className='text-black hover:text-royal-500 active:text-black dark:text-royal-100 dark:hover:text-white dark:active:text-royal-400'>
          <svg xmlns="http://www.w3.org/2000/svg" className='w-9 h-9' viewBox="0 1 24 24"><path fill="currentColor" fillRule="evenodd" d="M14.25 2.5a.25.25 0 0 0-.25-.25H7A2.75 2.75 0 0 0 4.25 5v14A2.75 2.75 0 0 0 7 21.75h10A2.75 2.75 0 0 0 19.75 19V9.147a.25.25 0 0 0-.25-.25H15a.75.75 0 0 1-.75-.75zm.75 9.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5zm0 4a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5z" clipRule="evenodd" /><path fill="currentColor" d="M15.75 2.824c0-.184.193-.301.336-.186q.182.147.323.342l3.013 4.197c.068.096-.006.22-.124.22H16a.25.25 0 0 1-.25-.25z" /></svg>
        </SocialIcon>
      </div>

    </div>
  );
}
