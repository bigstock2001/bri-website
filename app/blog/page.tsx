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

const portableComponents = {
  block: {
    normal: ({ children }: any) => (
      <p style={{ margin: "10px 0", lineHeight: 1.75 }}>{children}</p>
    ),
    h1: ({ children }: any) => (
      <h1 style={{ margin: "16px 0 10px", fontSize: 28, fontWeight: 900 }}>
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 style={{ margin: "14px 0 8px", fontSize: 22, fontWeight: 850 }}>
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 style={{ margin: "12px 0 6px", fontSize: 18, fontWeight: 800 }}>
        {children}
      </h3>
    ),
    blockquote: ({ children }: any) => (
      <blockquote
        style={{
          margin: "12px 0",
          padding: "10px 14px",
          borderLeft: "3px solid rgba(255,255,255,0.25)",
          background: "rgba(255,255,255,0.06)",
          borderRadius: 10,
          lineHeight: 1.7,
        }}
      >
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul style={{ margin: "10px 0", paddingLeft: 18, lineHeight: 1.75 }}>
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol style={{ margin: "10px 0", paddingLeft: 18, lineHeight: 1.75 }}>
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => <li style={{ margin: "6px 0" }}>{children}</li>,
    number: ({ children }: any) => <li style={{ margin: "6px 0" }}>{children}</li>,
  },
  marks: {
    link: ({ children, value }: any) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noreferrer"
        style={{
          textDecoration: "underline",
          textUnderlineOffset: 3,
        }}
      >
        {children}
      </a>
    ),
  },
};

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
                borderRadius: 16,
                padding: 18,
                background: "rgba(12, 12, 12, 0.55)",
                overflow: "hidden", // prevents any child from blowing out the card
              }}
            >
              <h2 style={{ fontSize: 24, fontWeight: 900, margin: 0 }}>
                {post.title}
              </h2>

              <div
                className="muted"
                style={{ marginTop: 6, fontSize: 13, opacity: 0.9 }}
              >
                {formatDate(post.publishedAt)}
              </div>

              {post.excerpt ? (
                <p style={{ marginTop: 12, marginBottom: 0, lineHeight: 1.7 }}>
                  {post.excerpt}
                </p>
              ) : null}

              {Array.isArray(post.body) && post.body.length > 0 ? (
                <div
                  style={{
                    marginTop: 14,
                    lineHeight: 1.75,
                    // ✅ THIS FIXES "RUNS OFF THE PAGE"
                    overflowWrap: "anywhere",
                    wordBreak: "break-word",
                    whiteSpace: "normal",
                  }}
                >
                  <PortableText value={post.body} components={portableComponents} />
                </div>
              ) : null}
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
