import { sanityClient } from "../../lib/sanity.client";
import { POSTS_WITH_BODY_QUERY } from "../../lib/sanity.queries";

export const dynamic = "force-dynamic";

function formatDate(iso?: string) {
  if (!iso) return "";
  try {
    return new Date(iso).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return "";
  }
}

function plainTextFromPortableText(blocks: any): string {
  if (!Array.isArray(blocks)) return "";
  return blocks
    .map((b) => {
      if (b?._type !== "block" || !Array.isArray(b.children)) return "";
      return b.children.map((c: any) => c?.text || "").join("");
    })
    .filter(Boolean)
    .join("\n\n");
}

export default async function BlogPage() {
  const posts: any[] = await sanityClient.fetch(POSTS_WITH_BODY_QUERY);

  return (
    <div className="card">
      <h1 className="h1" style={{ fontSize: 34 }}>Blog</h1>

      <div style={{ marginTop: 18, display: "grid", gap: 16 }}>
        {posts?.length ? (
          posts.map((p) => {
            const date = formatDate(p.publishedAt);
            const bodyText = plainTextFromPortableText(p.body);

            return (
              <article key={p._id} className="card" style={{ padding: 16 }}>
                <div style={{ display: "flex", gap: 10, alignItems: "baseline", flexWrap: "wrap" }}>
                  <h2 style={{ margin: 0, fontSize: 22, fontWeight: 800 }}>{p.title}</h2>
                  {date ? <span className="muted">{date}</span> : null}
                </div>

                {p.excerpt ? (
                  <p className="muted" style={{ marginTop: 8 }}>
                    {p.excerpt}
                  </p>
                ) : null}

                {bodyText ? (
                  <div style={{ marginTop: 12, whiteSpace: "pre-wrap", lineHeight: 1.6 }}>
                    {bodyText}
                  </div>
                ) : (
                  <p className="muted" style={{ marginTop: 12 }}>No body content.</p>
                )}
              </article>
            );
          })
        ) : (
          <p className="muted">No posts yet.</p>
        )}
      </div>
    </div>
  );
}
