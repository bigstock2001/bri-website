import Link from "next/link";
import { sanityClient } from "../../../lib/sanity.client";
import { POST_BY_SLUG_QUERY, POSTS_QUERY } from "../../../lib/sanity.queries";

export const dynamic = "force-dynamic";

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params?.slug;

  // Fetch the single post
  const post: any = await sanityClient.fetch(POST_BY_SLUG_QUERY, { slug });

  // If not found, show diagnostics (TEMP)
  if (!post) {
    const allPosts: any[] = await sanityClient.fetch(POSTS_QUERY);

    const projectId =
      process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "(missing env)";
    const dataset =
      process.env.NEXT_PUBLIC_SANITY_DATASET || "(missing env)";

    return (
      <div className="card">
        <h1 className="h1" style={{ fontSize: 30 }}>
          Post not found
        </h1>

        <p className="muted" style={{ marginTop: 10 }}>
          Slug in URL: <b>{String(slug)}</b>
        </p>

        <p className="muted" style={{ marginTop: 10 }}>
          Client projectId: <b>{projectId}</b>
          <br />
          Client dataset: <b>{dataset}</b>
        </p>

        <p className="muted" style={{ marginTop: 10 }}>
          Sanity returned {allPosts.length} posts. Slugs it sees:
        </p>

        <div style={{ marginTop: 12, display: "grid", gap: 10 }}>
          {allPosts.map((p) => (
            <div key={p._id} className="card" style={{ padding: 12 }}>
              <div style={{ fontWeight: 700 }}>{p.title}</div>
              <div className="muted" style={{ fontSize: 13 }}>
                slug: {p.slug}
              </div>
              <Link className="link" href={`/blog/${p.slug}`}>
                Open → /blog/{p.slug}
              </Link>
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

  // Render post (minimal, no PortableText yet to keep it bulletproof)
  return (
    <div className="card">
      <h1 className="h1" style={{ fontSize: 34 }}>
        {post.title}
      </h1>

      {post.excerpt ? (
        <p className="muted" style={{ marginTop: 10 }}>
          {post.excerpt}
        </p>
      ) : null}

      <div style={{ marginTop: 18 }}>
        <Link href="/blog" className="link">
          ← Back to Blog
        </Link>
      </div>
    </div>
  );
}
