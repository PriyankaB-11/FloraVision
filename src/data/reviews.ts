import type { Review } from "@/types";

const customerReviewText =
  "Just got my hands on some absolutely awesome plants, and I couldn’t be happier! Each one has its own unique charm and personality, and they’ve already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home. It's like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!";

export const reviews: Review[] = [
  {
    img: "/images/users/1.jpg",
    name: "Shelly Russel",
    stars: 5,
    review: customerReviewText,
  },
  {
    img: "/images/users/2.jpg",
    name: "Lula Rolfson",
    stars: 5,
    review: customerReviewText,
  },
  {
    img: "/images/users/3.jpg",
    name: "Carol Huels",
    stars: 5,
    review: customerReviewText,
  },
];

export const heroReview: Review = {
  img: "/images/users/4.jpg",
  name: "Ronnie Hamill",
  stars: 5,
  review:
    "I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.",
};
