export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: string;
  highlight?: string;
  verified?: boolean;
}

export const STATION_INFO = {
  name: "Desai Petrol Pump",
  legalName: "IndianOil – Desai Petroleums",
  brand: "IndianOil",
  category: "Petrol Pump / Fuel Station",
  rating: 4.0,
  reviewCount: 53,
  address: "Sy No 1632, 1, Jamkhandi - Athani Rd, Abbihal, Athani, Karnataka 591304",
  plusCode: "P3H4+V7 Abbihal, Karnataka",
  phone: "094486 37384",
  phoneTel: "tel:09448637384",
  officialUrl: "https://locator.iocl.com/indianoil-desai-petroleums-petrol-pump-abbihal-belgaum-204827/Home",
  fuels: ["Petrol", "Diesel"] as const,
  mapsQueryUrl: "https://www.google.com/maps/search/?api=1&query=Desai+Petrol+Pump%2C+Abbihal%2C+Athani%2C+Karnataka",
  mapsDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Desai+Petrol+Pump%2C+Abbihal%2C+Athani%2C+Karnataka"
};

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Local Motorist",
    rating: 4,
    date: "Google Review",
    text: "Good and prompt service.",
    highlight: "Prompt service",
    verified: true
  },
  {
    id: "rev-2",
    author: "Highway Traveler",
    rating: 5,
    date: "Google Review",
    text: "Highly recommended! The fuel felt great for my vehicles.",
    highlight: "Highly recommended",
    verified: true
  },
  {
    id: "rev-3",
    author: "Customer Feedback",
    rating: 3,
    date: "Google Review",
    text: "Decent fuel station on the Athani road, though air-filling facility was not available during my visit.",
    highlight: "Air-filling not available",
    verified: true
  }
];

export interface StationPhoto {
  id: string;
  title: string;
  caption: string;
  imageUrl: string;
  mapsUrl: string;
  tag: string;
}

export const REAL_STATION_PHOTOS: StationPhoto[] = [
  {
    id: "photo-1",
    title: "Station Forecourt & Canopy",
    caption: "Real photo of Desai Petrol Pump showing the IndianOil retail canopy, forecourt driveway, and surrounding Jamkhandi - Athani road landscape.",
    imageUrl: "/assets/images/station_photo_1.jpg",
    mapsUrl: "https://maps.app.goo.gl/N4LwwGiymjjsc6BR9",
    tag: "Forecourt & Canopy"
  },
  {
    id: "photo-2",
    title: "Fuel Dispensing Island & Station Office",
    caption: "Real photo of Desai Petroleums highlighting the fuel dispensing units, pillars, and sales building.",
    imageUrl: "/assets/images/station_photo_2.jpg",
    mapsUrl: "https://maps.app.goo.gl/qDmsSpEQtgaF18KDA",
    tag: "Fuel Dispensers"
  }
];

