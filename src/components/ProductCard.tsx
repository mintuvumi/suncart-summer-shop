import Link from "next/link";
import { Product } from "@/data/products";
import { FaStar } from "react-icons/fa";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group">

      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-56 w-full object-cover group-hover:scale-105 transition duration-300"
        />

        {/* Category badge */}
        <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs px-3 py-1 rounded-full shadow">
          {product.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        
        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">
          {product.name}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <FaStar className="text-yellow-500" />
          <span className="text-gray-700 text-sm font-medium">
            {product.rating}
          </span>
        </div>

        {/* Price */}
        <p className="text-xl font-bold text-orange-500">
          ${product.price}
        </p>

        {/* Button */}
        <Link
          href={`/products/${product.id}`}
          className="block text-center mt-2 py-2 rounded-lg bg-orange-500 text-white font-medium hover:bg-orange-600 transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}