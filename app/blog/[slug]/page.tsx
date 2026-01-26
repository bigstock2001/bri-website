// app/blog/[slug]/page.tsx
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { sanityClient } from "../../../lib/sanity.client";
import { POST_BY_SLUG_QUERY, POSTS_QUERY } from "../../../lib/sanity.queries";

export const dynamic = "force-dynamic";

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

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const slug = params?.slug;

  const post = slug
    ? await sanityClient.fetch(POST_BY_SLUG_QUERY, { slug })
    : null;

  // If no post found, show a helpful debug screen instead of a dead 404
  if (!slug || !post) {
    const all = await sanityClient.fetch(POSTS_QUERY);

    return (
      <div className="card">
        <h1 className="h1" style={{ fontSize: 30 }}>
          Post not found
        </h1>

        <p className="muted" style={{ marginTop: 10 }}>
          Slug in URL: <strong>{String(slug)}</strong>
        </p>

        <p className="muted" style={{ marginTop: 10 }}>
          Sanity returned <strong>{all?.length ?? 0}</strong> posts. Here are the slugs it sees:
        </p>

        <div style={{ marginTop: 12, display: "grid", gap: 8 }}>
          {(all || []).map((p: any) => (
            <div key={p._id} style={{ padding: 10, borderRadius: 12, border: "1px solid rgba(255,255,255,0.12)" }}>
              <div><strong>{p.title}</strong></div>
              <div className="muted" style={{ fontSize: 13 }}>
                slug: <code>{String(p.slug)}</code>
              </div>
              {p.slug ? (
                <div style={{ marginTop: 6 }}>
                  <Link className="link" href={`/blog/${p.slug}`}>
                    Open → /blog/{p.slug}
                  </Link>
                </div>
              ) : (
                <div className="muted" style={{ fontSize: 13, marginTop: 6 }}>
                  (This post has no slug in the API result)
                </div>
              )}
            </div>
          ))}
        </div>

        <div style={{ marginTop: 18 }}>
          <Link href="/blog" className="link">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  // Normal post view
  return (
    <div className="card">
      <div className="muted" style={{ fontSize: 13 }}>
        {formatDate(post.publishedAt)}
      </div>

      <h1 className="h1" style={{ fontSize: 34, marginTop: 8 }}>
        {post.title}
      </h1>

      {post.excerpt ? (
        <p className="muted" style={{ marginTop: 10 }}>
          {post.excerpt}
        </p>
      ) : null}

      <div style={{ marginTop: 18, lineHeight: 1.7 }}>
        {post.body ? <PortableText value={post.body} /> : <p className="muted">No content.</p>}
      </div>

      <div style={{ marginTop: 18 }}>
        <Link href="/blog" className="link">
          ← Back to Blog
        </Link>
      </div>
    </div>
  );
}
