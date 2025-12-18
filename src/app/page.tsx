import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import FeaturedSection from "@/components/FeaturedSection";

export default async function IndexPage() {
  const POSTS_QUERY = `*[
    _type == "post"
    && defined(slug.current)
  ]|order(publishedAt desc)[0...12]{
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage
  }`;

  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, {
    next: { revalidate: 30 },
  });

  return <FeaturedSection posts={posts} />;
}
