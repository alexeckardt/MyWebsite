import { BlogPostShell } from "@/components/BlogPostShell";
import { CodeBlock } from "@/components/CodeBlock";
import metadata from "./meta.json";

export default function BlogPost() {
  return (
    <BlogPostShell
      metadata={metadata}
      videoUrl={"https://www.youtube.com/watch?v=FXCDp9ryG4o"}
    >

      I started a Kickstarter. Here's how it's gone so far.

      I began putting it together in early February. The goal was to have everything ready in time for Toronto Game Expo (I'll write more about that separately).

      Most of February was spent building out the page—getting assets together, writing and rewriting the text, and figuring out how everything should be presented. It took longer than I expected, especially just getting the wording to feel right.

      The video ended up being its own process. I basically took apart my entire desk setup to make it work. I got pretty lucky here—when I was younger, I had a phase where I wanted to be a Minecraft YouTuber, so I already had a decent mic and a small light. That ended up carrying most of the production quality.

      I filmed it in my room, mostly on my bed to get better lighting. I also borrowed my roommate's camera, which was a big upgrade from my phone. I tried to do most of it in one take, which was a bit stressful, but it worked out. I've been doing a lot more video editing since January, so I was comfortable fixing things where I needed to, and overall it came together pretty smoothly.

      Working on the Kickstarter also pushed me to look into merch more seriously. There are a lot of options, and it's easy to overcomplicate it. If I were to redo it, I'd probably keep it simple and just focus on one item. I liked the pins the most, and they seem like the easiest to produce and manage.

      <h2>Takeaway</h2>

      Making a Kickstarter taught me a lot about what goes into presenting something as an actual product, not just a project. There's a different mindset when real money is involved, even at a small scale.

      It was also really rewarding to see people support it. At the same time, it made me realize how much goes into launching something like this—there's a lot more to think about than just the game itself.

      If you're curious, you can check it out here:
      <a href="https://kickstarter.com/projects/alex-eckardt/soulflame" className='underline font-semibold' >Soulflame Kickstarter</a>

    </BlogPostShell>
  );
}
