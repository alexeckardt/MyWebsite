import { AppShell } from "@/components/AppShell";

export default function Home() {

  const blogPages = [
    {
      title: "Test Blog Post",
      link: "/blog/test-post"
    },
  ]

  return (
    <AppShell>

      <a className="mb-5 md:-ml-5 text-gray-400 hover:text-gray-300" href="/">back</a>

      {/* Body */}
      <div className="main">
        <h1>Thanks for reading!</h1>

        {blogPages.map((page, index) => (
          <a href={page.link} key={index} className="bloglink">
            <h4 className="text-lg font-light">{page.title}</h4>
          </a>
        ))}
      </div>

    </AppShell>
  );
}
