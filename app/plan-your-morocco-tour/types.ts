export type TourPlannerData = {
  name: string;
  email: string;
  phone: string;
  country: string;
  travelDate: string;
  travelers: string;
  dreamTrip: string;

  destinations: string[];
  mustSee: string;
  interests: string[];

  travelStyle: string;
  accommodation: string;
  tourPace: string;
  specialRequests: string;

  files: File[];
};

export type TourPlannerFieldUpdater = <
  K extends keyof TourPlannerData
>(
  field: K,
  value: TourPlannerData[K]
) => void;

export type TourPlannerComponentProps = {
  value: TourPlannerData;
  onChange: TourPlannerFieldUpdater;
};