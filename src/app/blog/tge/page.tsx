import { BlogPostShell } from "@/components/BlogPostShell";
import { CodeBlock } from "@/components/CodeBlock";
import metadata from "./meta.json";

export default function BlogPost() {
  return (
    <BlogPostShell
      metadata={metadata}
      imageUrl={"/tge-demo.jpeg"}
    >

      <p>
        I didn't expect to be exhibiting at the Toronto Game Expo 2025, but I ended up going, and I'm really glad I did.
      </p>

      <p>
        I found out about TGE pretty randomly one night in January. I think I just searched “Toronto game events” without really thinking about it. The timing worked out strangely well—the exhibitor applications were about to open, so I decided to apply.
      </p>

      <p>
        I didn't expect to get in, but I did. On top of that, I was selected for one of the six free indie tables, which made a big difference for me.
      </p>

      <p>
        After that, things moved pretty quickly. I booked a cheap Airbnb and went with my roommate. Then it was mostly just preparation.
      </p>

      <p>
        There was more to do than I initially expected. I needed to get the game into a solid state for a public demo, figure out how I wanted the booth to look, and put together some basic marketing materials. None of those were individually overwhelming, but together they added up, especially with the time constraint.
      </p>

      <p>
        The actual expo was a good experience. I got to meet a lot of people—both other developers and players—and seeing people interact with the game in person was useful. It's different from showing it to friends or testing on your own. You notice things more quickly—what confuses people, what they gravitate toward, where they lose interest.
      </p>

      <p>
        I also got a lot of direct feedback, which was helpful. Some of it confirmed things I already suspected, and some of it pointed out issues I hadn't really considered.
      </p>

      <p>
        Overall, I think it was worth it. It took a fair amount of effort to get everything ready, but being able to show the game to people in that kind of setting made it worthwhile.
      </p>

      <p>
        If you're working on a game and have the chance to exhibit at something like TGE, I'd recommend trying it. It's a good way to get a clearer sense of how your game comes across to people who haven't seen it before.
      </p>

    </BlogPostShell>
  );
}
