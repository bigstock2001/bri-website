import { sanityClient } from "../../../lib/sanity.client";
import { POST_BY_SLUG_QUERY } from "../../../lib/sanity.queries";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params?.slug;

  if (!slug) return notFound();

  const post: any = await sanityClient.fetch(POST_BY_SLUG_QUERY, { slug });

  if (!post) return notFound();

  return (
    <div className="card">
      <h1 className="h1" style={{ fontSize: 34 }}>{post.title}</h1>

      {post.excerpt ? (
        <p className="muted" style={{ marginTop: 10 }}>
          {post.excerpt}
        </p>
      ) : null}

      {post.body ? (
        <pre style={{ marginTop: 14, whiteSpace: "pre-wrap" }}>
          {JSON.stringify(post.body, null, 2)}
        </pre>
      ) : null}
    </div>
  );
}
