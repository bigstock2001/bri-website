// app/blog/page.tsx
import Link from "next/link";
import { sanityClient } from "../../lib/sanity.client";
import { POSTS_QUERY } from "../../lib/sanity.queries";

function formatDate(iso?: string) {
  if (!iso) return "";
  try {
    return new Date(iso).toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return "";
  }
}

export default async function BlogPage() {
  const posts: any[] = await sanityClient.fetch(POSTS_QUERY);

  return (
    <div className="card">
      <h1 className="h1" style={{ fontSize: 34 }}>
        Blog
      </h1>

      {!posts?.length ? (
        <p className="muted" style={{ marginTop: 10 }}>
          No posts yet. Add one in <Link className="link" href="/studio">/studio</Link>.
        </p>
      ) : (
        <div style={{ marginTop: 16, display: "grid", gap: 14 }}>
          {posts.map((post) => {
            const slug = post?.slug; // <-- IMPORTANT: string from query ("slug": slug.current)

            return (
              <article
                key={post._id}
                className="card"
                style={{ padding: 16, borderRadius: 16 }}
              >
                <div className="muted" style={{ fontSize: 13 }}>
                  {formatDate(post.publishedAt)}
                </div>

                <h2 className="h1" style={{ fontSize: 22, marginTop: 6 }}>
                  {slug ? (
                    <Link href={`/blog/${slug}`} className="link">
                      {post.title}
                    </Link>
                  ) : (
                    post.title
                  )}
                </h2>

                {post.excerpt ? (
                  <p className="muted" style={{ marginTop: 8 }}>
                    {post.excerpt}
                  </p>
                ) : null}

                <div style={{ marginTop: 10 }}>
                  {slug ? (
                    <Link href={`/blog/${slug}`} className="link">
                      Read more →
                    </Link>
                  ) : (
                    <span className="muted">
                      Missing slug — open this post in Studio and click “Generate”.
                    </span>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}
