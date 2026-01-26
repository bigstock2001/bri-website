import Link from "next/link";
import { sanityClient } from "../../../lib/sanity.client";
import { POST_BY_SLUG_QUERY } from "../../../lib/sanity.queries";

export const dynamic = "force-dynamic";

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params?.slug;

  try {
    const post: any = await sanityClient.fetch(POST_BY_SLUG_QUERY, { slug });

    if (!post) {
      return (
        <div className="card">
          <h1 className="h1" style={{ fontSize: 30 }}>
            Post not found
          </h1>
          <p className="muted" style={{ marginTop: 10 }}>
            slug: <b>{String(slug)}</b>
          </p>
          <div style={{ marginTop: 18 }}>
            <Link href="/blog" className="link">
              ← Back to Blog
            </Link>
          </div>
        </div>
      );
    }

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
  } catch (err: any) {
    const projectId =
      process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "(missing env)";
    const dataset =
      process.env.NEXT_PUBLIC_SANITY_DATASET || "(missing env)";

    return (
      <div className="card">
        <h1 className="h1" style={{ fontSize: 30 }}>
          Blog page crashed (caught)
        </h1>

        <p className="muted" style={{ marginTop: 10 }}>
          slug: <b>{String(slug)}</b>
        </p>

        <p className="muted" style={{ marginTop: 10 }}>
          projectId: <b>{projectId}</b>
          <br />
          dataset: <b>{dataset}</b>
        </p>

        <pre
          style={{
            marginTop: 14,
            whiteSpace: "pre-wrap",
            fontSize: 12,
            opacity: 0.9,
          }}
        >
          {String(err?.message || err)}
        </pre>

        <div style={{ marginTop: 18 }}>
          <Link href="/blog" className="link">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }
}
