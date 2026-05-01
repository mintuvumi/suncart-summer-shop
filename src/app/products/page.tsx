import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function ProductsPage() {
  return (
    <section className="max-w-6xl mx-auto py-14 px-4">
      <h1 className="text-4xl font-black text-center mb-4">
        All Summer Products
      </h1>
      <p className="text-center text-slate-600 mb-10">
        Browse all seasonal products and choose your favorite summer essentials.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}