import { BlogPostShell } from "@/components/BlogPostShell";

export default function BlogPost() {
  return (
    <BlogPostShell
      title={"Fun"}
      date={"September 2"}
      videoUrl={"/header-light.png"}
    >

      <p>Tagline, Probably.</p>


      <h1>Section</h1>
      <h2>Subsection</h2>
      <h3>SubSubSection</h3>
      <h4>Really?</h4>
      <p>Content</p>

      <h3>SubSubSection</h3>
      <p>Content</p>
      <h4>Really?</h4>
      <p>Content</p>
      <p>Content</p>
      <h4>Really?</h4>
      <p>Content</p>

      <h2>Subsection</h2>
      <p>Content</p>
      <p>Content</p>
      <h1>Section</h1>

      <div className="codearea">
      I need to do some coding here.
      </div>


    </BlogPostShell>
  );
}
