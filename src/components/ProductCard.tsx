import Link from "next/link";
import { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="card bg-white shadow-xl overflow-hidden hover:-translate-y-2 transition">
      <figure>
        <img
          src={product.image}
          alt={product.name}
          className="h-56 w-full object-cover"
        />
      </figure>

      <div className="card-body">
        <p className="badge badge-warning">{product.category}</p>
        <h2 className="card-title">{product.name}</h2>
        <p>⭐ {product.rating}</p>
        <p className="text-2xl font-bold text-orange-500">${product.price}</p>

        <Link
          href={`/products/${product.id}`}
          className="btn bg-orange-500 text-white border-none"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}