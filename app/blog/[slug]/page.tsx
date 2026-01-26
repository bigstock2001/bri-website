import Link from "next/link";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <div className="card">
      <h1 className="h1" style={{ fontSize: 34 }}>
        Blog Post Route Works ✅
      </h1>
      <p className="muted" style={{ marginTop: 10 }}>
        Slug: <strong>{params.slug}</strong>
      </p>
      <div style={{ marginTop: 16 }}>
        <Link href="/blog" className="link">
          ← Back to Blog
        </Link>
      </div>
    </div>
  );
}
