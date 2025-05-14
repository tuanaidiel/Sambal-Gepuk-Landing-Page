export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  name: string;
  comment: string;
  rating: number;
  image: string;
}

export interface SocialMedia {
  id: number;
  name: string;
  url: string;
  icon: string;
}