import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";

type LayoutVariant = "vertical" | "horizontal";
type ImagePosition = "left" | "right";

type PostCardProps = {
  slug: string;
  title: string;
  excerpt?: string;
  publishedAt: string;
  imageUrl?: string;

  variant?: LayoutVariant;
  imagePosition?: ImagePosition;

  featured?: boolean; // new prop
};

export default function PostCardBase({
  slug,
  title,
  excerpt,
  publishedAt,
  imageUrl,
  variant = "vertical",
  imagePosition = "left",
  featured = false,
}: PostCardProps) {
  const isHorizontal = variant === "horizontal";

  return (
    <Link
      href={`/${slug}`}
      className={`group block rounded-xl border border-border bg-white overflow-hidden
                  hover:shadow-lg transition-shadow duration-300
                  ${isHorizontal ? "flex flex-col sm:flex-row" : ""}
                  ${featured ? "sm:flex-col lg:flex-row" : ""}
                `}
    >
      {/* Image */}
      <div
        className={`
    relative bg-muted w-full
    ${featured ? "h-72 sm:h-96 lg:h-[300px]" : ""}
    ${isHorizontal && !featured ? "min-h-[180px]" : ""}
    ${!isHorizontal && !featured ? "h-48" : ""}
    ${isHorizontal && imagePosition === "right" ? "order-2" : ""}
  `}
      >
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className={`object-cover group-hover:scale-105 transition-transform duration-500
              ${featured ? "rounded-t-lg lg:rounded-l-lg" : ""}`}
          />
        ) : (
          <div className="flex h-full items-center justify-center text-muted-foreground">
            FeedAfrica
          </div>
        )}
      </div>

      {/* Content */}
      <div
        className={`
    p-4 space-y-3 flex flex-col justify-center w-full
    ${featured ? "lg:p-4" : ""}
  `}
      >
        <p className="text-sm text-muted-foreground">
          {format(new Date(publishedAt), "MMMM d, yyyy")}
        </p>

        <h2
          className={`font-bold ${featured ? "text-2xl sm:text-2xl lg:text-3xl" : "text-lg"} leading-snug group-hover:text-primary transition-colors`}
        >
          {title}
        </h2>

        {excerpt && (
          <p
            className={`${featured ? "text-lg" : "text-sm text-gray-600"} line-clamp-3`}
          >
            {excerpt}
          </p>
        )}
      </div>
    </Link>
  );
}
