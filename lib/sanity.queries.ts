// lib/sanity.queries.ts
import { groq } from "next-sanity";

export const POSTS_WITH_BODY_QUERY = groq`
  *[_type == "post" && defined(slug.current)]
  | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    body,
    publishedAt,
    mainImage
  }
`;
