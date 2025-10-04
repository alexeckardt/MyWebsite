import { BlogPostShell } from "@/components/BlogPostShell";
import {CodeBlock} from "@/components/CodeBlock";
import { useLocation } from "react-router-dom";
// import metadata from "./meta.json";

export default function BlogPost() {
  return (
    <BlogPostShell
      // metadata={metadata}
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

      <CodeBlock language="typescript" filename="example.ts">
        {`// Example TypeScript code with proper syntax highlighting
        interface User {
          id: number;
          name: string;
          email: string;
        }

        function createUser(userData: Partial<User>): User {
          return {
          id: Math.random(),
          name: userData.name || 'Anonymous',
          email: userData.email || 'user@example.com'
          };
        }

        // Usage example
        const newUser = createUser({
          name: 'John Doe',
          email: 'john@example.com'
        });

        console.log('Created user:', newUser);`}
      </CodeBlock>
    </BlogPostShell>
  );
}
