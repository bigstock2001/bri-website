// app/blog/page.tsx
import { sanityClient } from "@/lib/sanity.client";
import { POSTS_WITH_BODY_QUERY } from "@/lib/sanity.queries";
import { PortableText } from "@portabletext/react";

export const dynamic = "force-dynamic";

function formatDate(iso?: string) {
  if (!iso) return "";
  try {
    return new Date(iso).toLocaleString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return iso;
  }
}

export default async function BlogPage() {
  const posts =
    (await sanityClient.fetch(POSTS_WITH_BODY_QUERY).catch(() => [])) || [];

  return (
    <div className="card" style={{ maxWidth: 980, margin: "0 auto" }}>
      <h1 className="h1" style={{ fontSize: 34 }}>
        Blog
      </h1>

      {posts.length === 0 ? (
        <p className="muted" style={{ marginTop: 10 }}>
          No posts yet.
        </p>
      ) : (
        <div style={{ marginTop: 18, display: "grid", gap: 22 }}>
          {posts.map((post: any) => (
            <article
              key={post._id}
              style={{
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 14,
                padding: 18,
                background: "rgba(12, 12, 12, 0.55)",
              }}
            >
              <h2 style={{ fontSize: 24, fontWeight: 800, margin: 0 }}>
                {post.title}
              </h2>

              <div
                className="muted"
                style={{ marginTop: 6, fontSize: 13, opacity: 0.9 }}
              >
                {formatDate(post.publishedAt)}
              </div>

              {post.excerpt ? (
                <p style={{ marginTop: 12, marginBottom: 0 }}>{post.excerpt}</p>
              ) : null}

              {Array.isArray(post.body) && post.body.length > 0 ? (
                <div style={{ marginTop: 14, lineHeight: 1.7 }}>
                  <PortableText value={post.body} />
                </div>
              ) : null}
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
