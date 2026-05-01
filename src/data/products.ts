export type Product = {
  id: number;
  name: string;
  brand: string;
  price: number;
  rating: number;
  stock: number;
  description: string;
  image: string;
  category: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "UV Protection Sunglasses",
    brand: "SunShade",
    price: 15,
    rating: 4.7,
    stock: 10,
    description: "Stylish UV protection sunglasses perfect for summer outings.",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
    category: "Accessories",
  },
  {
    id: 2,
    name: "Beach Straw Hat",
    brand: "SummerJoy",
    price: 22,
    rating: 4.5,
    stock: 15,
    description: "A lightweight beach hat to protect you from strong sunlight.",
    image: "https://images.unsplash.com/photo-1521369909029-2afed882baee",
    category: "Fashion",
  },
  {
    id: 3,
    name: "Aloe Vera Sunscreen",
    brand: "GlowCare",
    price: 18,
    rating: 4.8,
    stock: 20,
    description: "A gentle sunscreen with aloe vera for smooth summer skincare.",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03",
    category: "Skincare",
  },
  {
    id: 4,
    name: "Floral Summer Shirt",
    brand: "OceanWear",
    price: 30,
    rating: 4.6,
    stock: 12,
    description: "Comfortable floral shirt for beach trips and sunny outings.",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
    category: "Outfit",
  },
  {
    id: 5,
    name: "Quick Dry Beach Towel",
    brand: "WaveLife",
    price: 25,
    rating: 4.4,
    stock: 18,
    description: "Soft, colorful and quick-dry towel for beach days.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    category: "Beach",
  },
  {
    id: 6,
    name: "Hydration Water Bottle",
    brand: "AquaFresh",
    price: 12,
    rating: 4.9,
    stock: 25,
    description: "Keep yourself hydrated during hot summer days.",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8",
    category: "Lifestyle",
  },
];