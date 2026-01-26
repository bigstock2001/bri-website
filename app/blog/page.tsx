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
  const posts = await sanityClient.fetch(POSTS_QUERY);

  return (
    <div className="card">
      <h1 className="h1" style={{ fontSize: 34 }}>
        Blog
      </h1>

      {!posts || posts.length === 0 ? (
        <p className="muted" style={{ marginTop: 10 }}>
          No posts yet. Add your first post in{" "}
          <Link href="/studio" className="link">
            /studio
          </Link>
          .
        </p>
      ) : (
        <div style={{ marginTop: 16, display: "grid", gap: 14 }}>
          {posts.map((p: any) => {
            const hasSlug = typeof p.slug === "string" && p.slug.length > 0;

            return (
              <article key={p._id} className="card" style={{ padding: 16, borderRadius: 16 }}>
                <div className="muted" style={{ fontSize: 13 }}>
                  {formatDate(p.publishedAt)}
                </div>

                <h2 className="h1" style={{ fontSize: 22, marginTop: 6 }}>
                  {hasSlug ? (
                    <Link href={`/blog/${p.slug}`} className="link">
                      {p.title}
                    </Link>
                  ) : (
                    p.title
                  )}
                </h2>

                {p.excerpt ? (
                  <p className="muted" style={{ marginTop: 8 }}>
                    {p.excerpt}
                  </p>
                ) : null}

                {hasSlug ? (
                  <div style={{ marginTop: 10 }}>
                    <Link href={`/blog/${p.slug}`} className="link">
                      Read more →
                    </Link>
                  </div>
                ) : (
                  <p className="muted" style={{ marginTop: 10 }}>
                    (Missing slug — open this post in Studio and click “Generate”.)
                  </p>
                )}
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}
