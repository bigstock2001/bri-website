import Link from "next/link";
import { sanityClient } from "../../lib/sanity.client";
import { POSTS_QUERY } from "../../lib/sanity.queries";

export const dynamic = "force-dynamic";

export default async function BlogPage() {
  const posts: any[] = await sanityClient.fetch(POSTS_QUERY);

  return (
    <div className="card">
      <h1 className="h1" style={{ fontSize: 34 }}>Blog</h1>

      <div style={{ marginTop: 18, display: "grid", gap: 12 }}>
        {posts?.map((p) => {
          const slug = typeof p.slug === "string" ? p.slug : "";
          return (
            <div key={p._id} className="card" style={{ padding: 14 }}>
              <div style={{ fontWeight: 800, fontSize: 18 }}>{p.title}</div>

              {p.excerpt ? (
                <div className="muted" style={{ marginTop: 6 }}>
                  {p.excerpt}
                </div>
              ) : null}

              <div style={{ marginTop: 10 }}>
                {slug ? (
                  <Link className="link" href={`/blog/${slug}`}>
                    Read more →
                  </Link>
                ) : (
                  <span className="muted">Missing slug</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
