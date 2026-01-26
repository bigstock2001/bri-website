import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { sanityClient } from "../../../lib/sanity.client";
import { POST_BY_SLUG_QUERY } from "../../../lib/sanity.queries";

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
        {post.body ? <PortableText value={post.body} /> : null}
      </div>

      <div style={{ marginTop: 18 }}>
        <Link href="/blog" className="link">
          ← Back to Blog
        </Link>
      </div>
    </div>
  );
}
