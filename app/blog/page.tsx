import Link from "next/link";
import { sanityClient } from "../../lib/sanity.client";
import { POSTS_QUERY } from "../../lib/sanity.queries";

export const dynamic = "force-dynamic";

export default async function BlogPage() {
  const posts: any[] = await sanityClient.fetch(POSTS_QUERY);

  return (
    <div className="card">
      <h1 className="h1" style={{ fontSize: 34 }}>Blog</h1>

      {posts.length === 0 && (
        <p className="muted" style={{ marginTop: 10 }}>
          No posts yet.
        </p>
      )}

      <ul style={{ marginTop: 20 }}>
        {posts.map((post) => (
          <li key={post._id} style={{ marginBottom: 12 }}>
            <Link href={`/blog/${post.slug.current}`} className="link">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
