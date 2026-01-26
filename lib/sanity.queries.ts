export const POSTS_QUERY = `
*[_type == "post" && defined(slug.current)]
| order(publishedAt desc) {
  _id,
  title,
  slug
}
`;

export const POST_BY_SLUG_QUERY = `
*[_type == "post" && slug.current == $slug][0] {
  title,
  body
}
`;
