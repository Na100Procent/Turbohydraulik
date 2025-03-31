import { reviewData } from "@/app/data/data";
import { Review } from "@/app/data/types/review";

export function getCityReviewsList(citySlug?: string): Review[] {
  if (!citySlug) return reviewData;
  return reviewData.filter((review) => review.citySlug === citySlug);
}
