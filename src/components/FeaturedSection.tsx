import PostCard from "@/components/PostCard";
import PostCardHorizontal from "@/components/PostCardHorizontal";
import type { SanityDocument } from "next-sanity";
import { urlFor } from "@/sanity/image";

type FeaturedSectionProps = {
    posts: SanityDocument[];
};

export default function FeaturedSection({ posts }: FeaturedSectionProps) {
    if (!posts || posts.length === 0) return null;

    const [firstPost, ...otherPosts] = posts;

    // Pick first 2 posts for the side column (next to featured)
    const sidePosts = otherPosts.slice(0, 2);
    const remainingPosts = otherPosts.slice(2);

    return (
        <section className="container mx-auto p-6 max-w-6xl space-y-8">
            {/* Top Row */}
            <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-6">
                {/* Featured */}
                <PostCard
                    slug={firstPost.slug.current}
                    title={firstPost.title}
                    excerpt={firstPost.excerpt}
                    publishedAt={firstPost.publishedAt}
                    imageUrl={
                        firstPost.mainImage
                            ? urlFor(firstPost.mainImage)
                                .width(1600)
                                .height(900)
                                .fit("crop")
                                .url()
                            : undefined
                    }
                    featured
                />

                {/* Side posts */}
                <div className="flex flex-col gap-6">
                    {sidePosts.map((post) => (
                        <PostCardHorizontal
                            key={post._id}
                            slug={post.slug.current}
                            title={post.title}
                            excerpt={post.excerpt}
                            publishedAt={post.publishedAt}
                            imageUrl={
                                post.mainImage
                                    ? urlFor(post.mainImage).width(600).height(300).url()
                                    : undefined
                            }
                            // imagePosition={i % 2 === 0 ? "left" : "right"} // alternate sides
                            imagePosition="right"
                        />
                    ))}
                </div>
            </div>

            {/* Remaining Posts */}
            {remainingPosts.length > 0 && (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {remainingPosts.map((post) => (
                        <PostCard
                            key={post._id}
                            slug={post.slug.current}
                            title={post.title}
                            excerpt={post.excerpt}
                            publishedAt={post.publishedAt}
                            imageUrl={
                                post.mainImage
                                    ? urlFor(post.mainImage).width(800).height(500).url()
                                    : undefined
                            }
                        />
                    ))}
                </div>
            )}
        </section>
    );
}
