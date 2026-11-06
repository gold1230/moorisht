export const tourTypes = [
  "All Types",
  "Private Tours",
  "Small Group Tours",
  "Luxury Tours",
  "Family Tours",
  "Adventure Tours",
  "Cultural Tours",
] as const;

export type TourType = (typeof tourTypes)[number];
