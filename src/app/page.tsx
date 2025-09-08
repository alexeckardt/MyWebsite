import Image from "next/image";
import { Welcome } from "../Sections/Welcome";
import { WorkExperience } from "../Sections/WorkExperience";
import { Projects } from "../Sections/Projects";
import { Experiments } from "../Sections/Experiments";
import { SocialIcon } from "@/components/social_icon";
import { InlineOutboundLink } from "@/components/InlineOutboundLink";

export default function Home() {


  const blogPosts = [
    {
      title: "Devlog 0",
      link: "/blog/devlog-0"
    },
  ]


  return (
    <>
      {/* Header */}
      <div className="h-1/4 w-full -z-1 overflow-hidden bg-[url(/images/backgrounds/header_dark.png)] bg-bottom bg-cover fixed top-0 left-0"></div>

      {/* Body */}
      <div className="bg-white w-full mt-24">
        <div className="flex flex-col max-w-[65ch] mx-12 lg:mx-auto pt-12 lg:mt-10">

          <div className="main">

            <h1>Hey, I'm Alex Eckardt &#128075;</h1>

            <div className="mb-2 gap-5 flex flex-col font-sans text-neutral-600 dark:text-neutral-100 text-base/6 font-size-[1rem]">
              <p>I currently work @ <a target="_blank" rel="noopener noreferrer" href="https://samos.com">Samos Insurance</a> as a Software Developer. I also am working on <a target="_blank" rel="noopener noreferrer" href="https://alexeckardt.itch.io/soulflame">Soulflame</a>, an action adventure platforming game. I am an alumnus of <b>McMaster University</b>, where I studied Computer Science.</p>
              <p>Previously, I worked @ <a target="_blank" rel="noopener noreferrer" href="https://orbitalquantum.com">Orbital Quantum</a> and <a target="_blank" rel="noopener noreferrer" href="https://www.yarowa.com/english/home/">Yarowa</a>.</p>
              <p>I have many projects, including <a target="_blank" rel="noopener noreferrer" href="https://alexeckardt.itch.io/pinball-pioneer">Pinball Pioneer</a>, which placed in the Top 0.1% of entires.</p>
            </div>


            <h2>Recent Blog Post{blogPosts.length > 1 && 's'}</h2>
            {blogPosts.map((video) => (
              <a key={video.title} href={video.link} target="_blank" rel="noopener noreferrer" className="bloglink">
                <p>{video.title}</p>
                <p className="font-sans font-light">Read</p>
              </a>
            ))}

            <h2>Links</h2>
            <div className="flex gap-12 links">
              <a className="flex items-center gap-1" target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/alex-eckardt"> connect <InlineOutboundLink /></a>
              <a className="flex items-center gap-1" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@pixeqla"> watch <InlineOutboundLink /></a>
              <a className="flex items-center gap-1" target="_blank" rel="noopener noreferrer" href="https://github.com/alexeckardt"> see <InlineOutboundLink /></a>
              <a className="flex items-center gap-1" target="_blank" rel="noopener noreferrer" href="https://x.com/pixeqla"> follow <InlineOutboundLink /></a>
              <a className="flex items-center gap-1" target="_blank" rel="noopener noreferrer" href="/Alexander_Eckardt_Website_Resume.pdf"> cv <InlineOutboundLink /></a>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
