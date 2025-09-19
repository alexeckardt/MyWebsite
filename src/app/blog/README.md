## How to Add a New Blog Post

1. **Create a folder:**  
    `src/app/blog/my-new-post`

2. **Add your content:**  
    Create a `page.tsx` file inside your new folder and add your post content.

3. **(Optional) Add metadata:**  
    Create a `meta.json` file with details like:
    ```json
    {
      "title": "My New Post",
      "date": "2025-09-18",
      "description": "What this one’s about."
    }
    ```

4. **Done!**  
    Your post will appear automatically at `/blog`.


## Example Blog Post
```
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
```