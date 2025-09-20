import { AppShell } from "@/components/AppShell";
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
          <a href={`/blog/${post.slug}`} key={post.slug} className="bloglink">
            <h4 className="text-lg font-light">{post.title}</h4>
            {post.date && (
              <p className="text-xs text-gray-500">{new Date(post.date).toLocaleDateString()}</p>
            )}
            {post.description && (
              <p className="text-sm text-gray-500">{post.description}</p>
            )}
          </a>
        ))}
      </div>
    </AppShell>
  );
}
