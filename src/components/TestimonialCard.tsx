import Image from "next/image";
import { IoIosStar } from "react-icons/io";
import type { Review } from "@/types";
import { ReviewCardShape } from "./CardShapes";

type TestimonialCardProps = {
  review: Review;
  variant?: "primary" | "compact";
};

export default function TestimonialCard({
  review,
  variant = "primary",
}: TestimonialCardProps) {
  if (variant === "compact") {
    return <CompactTestimonial review={review} />;
  }

  const cardId = `review-${review.name.replace(/\s/g, "-")}`;

  return (
    <ReviewCardShape id={cardId} className="w-80 h-[28rem] md:h-[30rem]">
      <div className="absolute inset-0 flex flex-col p-10">
        <div className="flex items-center gap-4 shrink-0 mb-4">
          <div className="w-14 h-14 overflow-hidden rounded-full relative shrink-0">
            <Image
              src={review.img}
              alt={review.name}
              fill
              sizes="56px"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-1 min-w-0">
            <h2 className="text-[1.1rem] text-[var(--color-text-primary)] font-medium leading-tight">
              {review.name}
            </h2>
            <StarRating count={review.stars} />
          </div>
        </div>
        <p className="text-[var(--color-text-secondary)] text-[0.85rem] leading-relaxed flex-1">
          {review.review}
        </p>
      </div>
    </ReviewCardShape>
  );
}

function CompactTestimonial({ review }: { review: Review }) {
  return (
    <div className="w-72 h-40 relative shrink-0">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 409 237"
        fill="none"
        className="w-full h-full"
        aria-hidden="true"
      >
        <foreignObject x="-20.2" y="-20.2" width="449.4" height="277.4">
          <div
            style={{
              backdropFilter: "blur(10.1px)",
              clipPath: "url(#hero-review-clip)",
              height: "100%",
              width: "100%",
            }}
          />
        </foreignObject>
        <path
          d="M45 1H364C388.301 1 408 20.6995 408 45V192C408 216.301 388.301 236 364 236H45C20.6995 236 1 216.301 1 192V45C1 20.6995 20.6995 1 45 1Z"
          fill="white"
          fillOpacity="0.05"
          stroke="url(#hero-review-gradient)"
          strokeWidth={2}
        />
        <defs>
          <clipPath id="hero-review-clip" transform="translate(20.2 20.2)">
            <path d="M45 1H364C388.301 1 408 20.6995 408 45V192C408 216.301 388.301 236 364 236H45C20.6995 236 1 216.301 1 192V45C1 20.6995 20.6995 1 45 1Z" />
          </clipPath>
          <linearGradient
            id="hero-review-gradient"
            x1="0"
            y1={18}
            x2="403.742"
            y2="246.299"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0.42" />
            <stop offset="0.0001" stopColor="white" stopOpacity="0.34" />
            <stop offset="0.525917" stopColor="white" stopOpacity={0} />
            <stop offset={1} stopColor="white" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 p-7 flex flex-col">
        <div className="flex items-center gap-4 shrink-0 mb-2">
          <div className="w-11 h-11 rounded-full overflow-hidden relative shrink-0">
            <Image
              src={review.img}
              alt={review.name}
              fill
              sizes="44px"
              className="object-cover"
            />
          </div>
          <div className="min-w-0">
            <span className="text-[var(--color-text-primary)] text-sm leading-tight block">
              {review.name}
            </span>
            <StarRating count={review.stars} size="sm" />
          </div>
        </div>
        <p className="text-[var(--color-text-secondary)] text-[0.8rem] leading-snug line-clamp-3">
          {review.review}
        </p>
      </div>
    </div>
  );
}

function StarRating({ count, size = "md" }: { count: number; size?: "sm" | "md" }) {
  const iconClass =
    size === "sm"
      ? "text-[var(--color-stars)] text-[0.8rem]"
      : "text-[var(--color-stars)] text-base";

  return (
    <div className="flex items-center gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <IoIosStar className={iconClass} key={i} aria-hidden="true" />
      ))}
    </div>
  );
}
