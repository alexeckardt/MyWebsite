import { PostMeta } from "@/lib/posts";

interface BlogPostLinkProps {
    post: PostMeta;
}

export const BlogPostLink = ({ post }: BlogPostLinkProps) => {

    console.log(post);
    let tagCol = "#3b82f6"; // default to blue
    switch (post.tag?.toLowerCase()) {
        case "project":
            tagCol = "#a855f7";
            break;
        case "review":
            tagCol = "#eab308";
            break;
        case "project review":
            tagCol = "#2ab844";
            break;
    }
    console.log(tagCol);

    return (
        <a href={`/blog/${post.slug}`} key={post.slug} className="bloglink group">

            <div className="flex justify-between items-center w-full">
                <h4 className="text-lg font-light">{post.title}</h4>
                {post.tag && (
                    <p style={{color: `${tagCol}`}}className={`text-xs px-2 py-1 rounded-full border opacity-80 group-hover:opacity-100`}>{post.tag}</p>
                )}
            </div>

            {post.date && (
                <p className="text-xs text-gray-500">{new Date(post.date).toLocaleDateString()}</p>
            )}
            {post.description && (
                <p className="text-sm text-gray-500">{post.description}</p>
            )}
        </a>
    );
}