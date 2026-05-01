"use client";

import { products } from "@/data/products";
import { useSession } from "@/lib/auth-client";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProductDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const { data: session, isPending } = useSession();

  useEffect(() => {
    if (!isPending && !session?.user) {
      router.push(`/login?redirect=/products/${id}`);
    }
  }, [session, isPending, router, id]);

  if (isPending) {
    return <p className="text-center py-20">Loading...</p>;
  }

  if (!session?.user) {
    return null;
  }

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return <p className="text-center py-20">Product not found.</p>;
  }

  return (
    <section className="max-w-6xl mx-auto py-14 px-4">
      <div className="grid md:grid-cols-2 gap-10 bg-white p-6 rounded-3xl shadow-xl">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[420px] object-cover rounded-3xl"
        />

        <div>
          <p className="badge badge-warning">{product.category}</p>
          <h1 className="text-4xl font-black mt-4">{product.name}</h1>

          <div className="space-y-2 mt-6 text-lg">
            <p>
              <strong>Brand:</strong> {product.brand}
            </p>
            <p>
              <strong>Rating:</strong> ⭐ {product.rating}
            </p>
            <p>
              <strong>Stock:</strong> {product.stock}
            </p>
          </div>

          <p className="text-4xl font-black text-orange-500 mt-6">
            ${product.price}
          </p>

          <p className="mt-5 text-slate-600">{product.description}</p>

          <button className="btn bg-orange-500 text-white border-none mt-8">
            Place Order
          </button>
        </div>
      </div>
    </section>
  );
}