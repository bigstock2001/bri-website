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
          {posts.map((p) => (
            <article key={p._id} className="card" style={{ padding: 16, borderRadius: 16 }}>
              <div className="muted" style={{ fontSize: 13 }}>
                {formatDate(p.publishedAt)}
              </div>

              <h2 className="h1" style={{ fontSize: 22, marginTop: 6 }}>
                <Link href={`/blog/${p.slug}`} className="link">
                  {p.title}
                </Link>
              </h2>

              {p.excerpt ? (
                <p className="muted" style={{ marginTop: 8 }}>
                  {p.excerpt}
                </p>
              ) : null}

              <div style={{ marginTop: 10 }}>
                <Link href={`/blog/${p.slug}`} className="link">
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
