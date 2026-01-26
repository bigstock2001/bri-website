import { client } from "@/lib/sanity.client";
import { POST_BY_SLUG_QUERY } from "@/lib/sanity.queries";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = params;

  if (!slug) {
    notFound();
  }

  const post = await client.fetch(POST_BY_SLUG_QUERY, { slug });

  if (!post) {
    notFound();
  }

  return (
    <article className="card">
      <h1 className="h1">{post.title}</h1>

      {post.publishedAt && (
        <p className="muted" style={{ marginTop: 6 }}>
          {new Date(post.publishedAt).toLocaleDateString()}
        </p>
      )}

      {post.excerpt && (
        <p style={{ marginTop: 20 }}>{post.excerpt}</p>
      )}
    </article>
  );
}
