import { Product, Feature, Testimonial, SocialMedia } from '../types';

export const businessName = "Sambal Homemade";
export const tagline = "Pedas Padu! Sambal Gepuk & Penyet Homemade";
export const whatsappNumber = "60123456789";
export const whatsappMessage = "Hi Saya nak order sambal";
export const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

export const products: Product[] = [
  {
    id: 1,
    name: "Sambal Gepuk",
    description: "Authentic Javanese-style crushed chili sambal with a perfect balance of heat and flavor. Made from premium chilies and spices.",
    price: "RM 14.90",
    image: "public/ayam-gepuk.jpg"
  },
  {
    id: 2,
    name: "Sambal Penyet",
    description: "Traditional Indonesian smashed chili sauce with a rich, spicy kick. Perfect companion for your fried chicken, tempe, or rice.",
    price: "RM 14.90",
    image: "public/ayam-penyet.jpg"
  }
];

export const features: Feature[] = [
  {
    id: 1,
    title: "100% Homemade",
    description: "Crafted with love in small batches to maintain quality and authentic flavor in every jar.",
    icon: "ChefHat"
  },
  {
    id: 2,
    title: "No Preservatives",
    description: "Made with only fresh, natural ingredients without any artificial preservatives or additives.",
    icon: "Leaf"
  },
  {
    id: 3,
    title: "Spicy & Delicious",
    description: "The perfect balance of heat and flavor that enhances any dish from rice to noodles.",
    icon: "Flame"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah K.",
    comment: "The best sambal I've ever tasted! The Sambal Gepuk has the perfect level of spiciness and goes amazingly well with my nasi lemak.",
    rating: 5,
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    name: "Ahmad R.",
    comment: "I'm addicted to this Sambal Penyet! It's authentically spicy and has a complex flavor that store-bought sambal just doesn't have.",
    rating: 5,
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    name: "Lisa T.",
    comment: "Ordering was so easy through WhatsApp, and the sambal arrived fresh and delicious. My family loved it!",
    rating: 5,
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

export const socialMedia: SocialMedia[] = [
  {
    id: 1,
    name: "Instagram",
    url: "https://instagram.com/",
    icon: "Instagram"
  },
  {
    id: 2,
    name: "Facebook",
    url: "https://facebook.com/",
    icon: "Facebook"
  },
  {
    id: 3,
    name: "Twitter",
    url: "https://twitter.com/",
    icon: "Twitter"
  }
];