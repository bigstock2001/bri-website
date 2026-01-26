export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <div className="card">
      <h1 className="h1" style={{ fontSize: 34 }}>
        Slug route is live ✅
      </h1>
      <p className="muted" style={{ marginTop: 10 }}>
        slug: <b>{params?.slug}</b>
      </p>
      <p className="muted" style={{ marginTop: 10 }}>
        If you see this, Next is serving <code>/blog/[slug]</code> correctly.
      </p>
    </div>
  );
}
