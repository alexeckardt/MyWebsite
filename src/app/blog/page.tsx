import { AppShell } from "@/components/AppShell";
import { BlogPostLink } from "@/components/BlogPostLink";
import { getPosts } from "@/lib/posts";

export default async function Home() {
  const posts = await getPosts();

  return (
    <AppShell>
      <a className="mb-5 md:-ml-5 text-gray-400 hover:text-gray-300" href="/">back</a>

      {/* Body */}
      <div className="main">
        <h1>Thanks for reading!</h1>
        <p>I post infrequently about things I've been working on. Read below!</p>

        <h2>All Blog Posts</h2>
        {posts.map((post) => (
          <BlogPostLink key={post.slug} post={post} />
        ))}
      </div>
    </AppShell>
  );
}
