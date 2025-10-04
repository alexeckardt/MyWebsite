import { BlogPostShell } from "@/components/BlogPostShell";
import { CodeBlock } from "@/components/CodeBlock";
import Image from "next/image"; // Import Next.js Image component
import metadata from "./meta.json";

export default function BlogPost() {
  return (
    <BlogPostShell
      metadata={metadata}
      imageUrl={"/images/projects/pinball_highres.png"}
    >
      <p>
        <strong>Pinball Pioneer</strong> is my fast-paced, risk-reward pinball adventure created in just 48 hours for a game jam.
        This post covers the time-boxed process, how I approached the title screen, and the motivation that kept me shipping.
      </p>

      <h2>Motivation</h2>
      <p><strong>Constraints force clarity.</strong> Not only did I only have 48 hours, I had to settle quickly on an idea that fit the theme of "Roles Reversed."</p>

      <p><strong>What does that even mean?</strong> It took me about an hour, but I was able to come up with something I liked, based on a trip to an arcade bar I had coincidentally gone to a few days prior.</p>

      <p>In pinball, you usually control flippers to keep the ball in play, trying to score points as the ball passes between obsticles.</p>

      <p> Initially, I thought about making the player be the ball, but the more I thought about the logistics of that, I had the thought; "What if you <span className="italics">made</span> the level?"</p>

      <p>So I did. I made a pinball game not where you control the flippers, but a little construction worker to design the level by moving obsticles to protect the holes from balls scoring them.</p>


      <h2>The 48-Hour Sprint</h2>

      <p><em>Hour 0-6:</em> Prototyped the core: ball motion, flippers, and collisions. I used simple circles/segments and tuned restitution before any art.</p>
      <p><em>Hour 6-18:</em> Built level geometry and added early juice: screen shake on bumper hits.</p>
      <p><em>Hour 18-25:</em> Nap Time! I took my rest here as I didn't want to burn out on the first day.</p>
      <p><em>Hour 25-42:</em> Title screen + pause menu, basic SFX pass, and polish (ball trails, subtle bloom).</p>
      <p><em>Hour 42-48:</em> Final balance, bug triage, packaging, and itch page copy.</p>

      <p>Funilly enough, as I got closer and closer to my regular bed-time on the second night, I felt a surge of energy - I didn't want to stop. I pished through all the way until submission at 8AM.</p>
      <p>My so-called "friends" then decided to drag me to Toronto after this (just kidding, I wanted to go - they supported me with late night Ice Capps); At the end of our excursion, I ended up staying up for 32 hours straight, my all time record.</p>

      <Image
        src="/images/projects/pinball_ss_1.png"
        alt="Screenshot of Pinball Pioneer gameplay"
        width={800} // Adjust width
        height={600} // Adjust height
      />

      <h2>Designing the Core Loop</h2>
      <p>
        The loop is simple: <em>Gather the construction themed obsticles → block lanes that could lead to the "player" scoring points → test your layout → make sure no more than 3 balls go in</em>.
      </p>


      <h2>What Went Right / What I'd Change</h2>
      <p><strong>Went right:</strong> small scope, tactile feedback, and a single compelling risk mechanic.</p>
      <p><strong>Next time:</strong> More levels, and some more variations (rails for balls to glide along, just like they have in real life) schedule a second pass on accessibility (color-blind lamp set, remappable keys).</p>


      <h2>Results</h2>
      <p>After the judging period from the community, I ended up in 7th place, out of 7000 entries. This let me </p>

      <p>I got a lot of feedback, many of it being that I should have embedded my game into the website instead of making a stand-alone application. This would probably have let me reach more people, so I definetly will keep that in mind for my next game jam entry.</p>

      <p>The following is by Mark Brown (the creator and organizer of this jam), and it's his review of his favourite 20 games. This was super amazing for me</p>
      <p>I may not have been on of his favourites, but I'm featured at 2:51 !</p>


      <div className="mb-8">
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/tYxZ_LOlFnU?si=O-Li7vmiTFGBi9XN" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>


      <h2>Want to play it yourself?</h2>
      <p>
        <a href="https://alexeckardt.itch.io/pinball-pioneer" target="_blank" rel="noopener noreferrer">
          Play Pinball Pioneer on itch.io
        </a>
      </p>
    </BlogPostShell>
  );
}
