import Link from "next/link";
import { sanityClient } from "../../lib/sanity.client";
import { POSTS_QUERY } from "../../lib/sanity.queries";

export default async function BlogPage() {
  const posts = await sanityClient.fetch(POSTS_QUERY);

  return (
    <div className="card">
      <h1 className="h1" style={{ fontSize: 34 }}>Blog</h1>

      <div style={{ marginTop: 16, display: "grid", gap: 14 }}>
        {posts.map((post: any) => {
          if (!post.slug) {
            return (
              <article key={post._id} className="card">
                <h2>{post.title}</h2>
                <p className="muted">
                  ⚠️ This post is missing a slug. Open it in Studio and click “Generate”.
                </p>
              </article>
            );
          }

          return (
            <article key={post._id} className="card">
              <h2>
                <Link href={`/blog/${post.slug}`} className="link">
                  {post.title}
                </Link>
              </h2>

              {post.excerpt && <p className="muted">{post.excerpt}</p>}

              <Link href={`/blog/${post.slug}`} className="link">
                Read more →
              </Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}
