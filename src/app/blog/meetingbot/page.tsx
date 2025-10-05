import { BlogPostShell } from "@/components/BlogPostShell";
import { CodeBlock } from "@/components/CodeBlock";
import Image from "next/image";
import metadata from "./meta.json";
import { InlineOutboundLink } from "@/components/InlineOutboundLink";

export default function BlogPost() {
  return (
    <BlogPostShell
      metadata={metadata}
      imageUrl={"/images/blog/meetingbot-poster.png"}
    >
      <p>
        <strong>MeetingBot</strong> is our self-hostable meeting automation tool — a bot that joins
        Zoom, Teams, and Google Meet calls to record and process meeting data. It started
        as our final-year capstone project and evolved into something much larger.
      </p>

      <p>I was able to work on this project with these brilliant people:</p>
      <ul>
        <li className="ml-2"><a href="https://github.com/owengretzinger" target="_blank" rel="noopener noreferrer" className='flex gap-2 items-center w-fit'>• Owen Gretzinger <InlineOutboundLink /></a></li>
        <li className="ml-2"><a href="https://github.com/sarahsimionescu" target="_blank" rel="noopener noreferrer" className='flex gap-2 items-center w-fit'>• Sarah Simionescu<InlineOutboundLink /></a></li>
        <li className="ml-2"><a href="https://github.com/err53" target="_blank" rel="noopener noreferrer" className='flex gap-2 items-center w-fit'>• Jason Huang<InlineOutboundLink /></a></li>
        <li className="ml-2"><a href="https://github.com/sahibkhokhar" target="_blank" rel="noopener noreferrer" className='flex gap-2 items-center w-fit'>• Sahib Khokhar<InlineOutboundLink /></a></li>
      </ul>

      <h2>The Idea</h2>
      <p>
        We wanted to make something that could quickly and easily record meeting data without the use of External APIs - meaning you could ensure all of your data stayed private.
        The key motivation was <strong>privacy</strong> and <strong>control</strong>: letting people deploy
        their own bots locally and self hosting the solution -- simplifies compliance, trust, and cost.
      </p>

      <p>
        Early on, we scoped three core features:
      </p>
      <ul className="mb-5">
        <li>• Join meetings automatically via link and authenticate locally</li>
        <li>• Record sessions (audio + video)</li>
        <li>• Provide APIs for developers to build meeting-based automations</li>
      </ul>

      <div className="flex justify-center items-center m-10 flex-col w-full">
        <Image
          src="/images/blog/meetingbot-architecture.png"
          alt="MeetingBot Poster"
          width={800}
          height={600}
        />
        <p>Infographic Poster of MeetingBot architecture and use-cases</p>
      </div>

      <h2>Challenges Along the Way</h2>
      <p>
        MeetingBot wasn't just another Node.js API project — it required real-time handling of media,
        streaming, and browser automation. We hit a lot of walls, especially with
        <strong>FFmpeg</strong>.
      </p>

      <p>
        Getting FFmpeg to correctly capture and mux both audio and video streams from a headless browser
        (via <code>Playwright</code>) was tough. Initially, my recording solution didn't even record audio; which I discovered a day before we had a meeting with a potential stakeholder. Of course, an all night insued. I eventually solved my blunder by using a lightweight launch script that pre-initialized FFmpeg with silent audio buffers before capturing the stream.
      </p>

      <CodeBlock language="bash">
        {`ffmpeg -f pulse -ac 2 -i default -f x11grab -r 30 -s 1280x720 -i :0.0 -c:v libx264 -c:a aac output.mp4`}
      </CodeBlock>

      <p>
        But the biggest headache wasn't FFmpeg — it was <strong>Docker build speed</strong>.
      </p>

      <h2>Discovering Docker Caching</h2>
      <p>
        During early iterations, every build of our bot image took nearly 10 minutes. Since we had to
        frequently test browser interactions with Playwright and FFmpeg, this was painful. Even 1 line changes for any of our bots took forever to test. To any experienced Docker developer, you can probably already see the problem; but none of us had ever used Docker seriously before.
      </p>

      <p>
        Eventually, We discovered <strong>Docker layer caching</strong>. By restructuring our Dockerfile
        to install dependencies first, and only copy over source files afterward, we reduced rebuild
        times from minutes to seconds - a huge win for our development speed.
      </p>

      <CodeBlock
        language="dockerfile"
      >
        {`# Install dependencies first (cached)
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Copy source after deps are cached
COPY . .

RUN pnpm build
CMD ["pnpm", "start"]`}
      </CodeBlock>

      <p>
        It's one of those small “ah-ha” moments that made our dev flow dramatically faster. Especially for me, who already was developing on a lower-end laptop, this was a game-changer.
      </p>

      <h2>Cool Discussions and Collaboration</h2>
      <p>
        Working on MeetingBot wasn't just coding — it was full of deep technical and philosophical
        conversations. We debated open-source licensing, discussed hosting trade-offs (local vs. cloud),
        and experimented with different architectures for scaling multiple bots concurrently.
      </p>

      <p>One discussion we had was switching our backend from Python to JavaScript in order to use a TRPC server to ensure Type Correctness between our client and our backend. This ended up being a huge help while developing our application flow, and made us seem that more professional.</p>

      <p>
        Some of my favorite nights were spent whiteboarding possible architectures — how to let a single
        API manage 10+ meeting bots with separate browser contexts, or how to gracefully handle reconnects
        when Zoom booted the bot mid-meeting. These discussions were where the project really came alive.
      </p>

      <h2>Expo</h2>

      <p>After many months of development, we were able to show off our project at the McMaster University Capstone Expo in April of 2025. We got a lot of people coming up and asking questions, and it was an awesome experience.</p>


      <div className="flex justify-center items-center m-10 flex-col w-full">
        <Image
          src="/images/blog/meetingbot-team.png"
          alt="Expo Team Photo"
          width={800}
          height={500}
        />
        <p>Our Team at the McMaster University Capstone Expo, April 2025</p>
      </div>


      <h2>Lessons Learned</h2>
      <ul className="mb-5">
        <li>• FFmpeg is powerful but merciless — always isolate and test it in small scripts first.</li>
        <li>• Browser automation + media recording = unexpected edge cases. Use retries liberally.</li>
        <li>• Docker caching can save you hours when iterating on multi-layered builds.</li>
        <li>• Good discussions are as valuable as good commits.</li>
      </ul>

      <h2>Try It Yourself</h2>
      <p>
        The project is open-source and still evolving. You can check it out on GitHub:
      </p>
      <p>
        <a
          href="https://github.com/meetingbot/meetingbot"
          target="_blank"
          rel="noopener noreferrer"
        >
          View MeetingBot on GitHub
        </a>
      </p>
    </BlogPostShell>
  );
}
