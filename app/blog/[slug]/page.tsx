import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { sanityClient } from "../../../lib/sanity.client";
import { POST_BY_SLUG_QUERY } from "../../../lib/sanity.queries";

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

      {post.body && (
        <div style={{ marginTop: 20 }}>
          <PortableText value={post.body} />
        </div>
      )}

      <div style={{ marginTop: 24 }}>
        <Link href="/blog" className="link">
          ← Back to Blog
        </Link>
      </div>
    </div>
  );
}
