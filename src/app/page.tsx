import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function Home() {
  const popularProducts = products.slice(0, 3);

  return (
    <div>
      <section className="min-h-[75vh] bg-gradient-to-br from-orange-400 via-yellow-300 to-pink-300 flex items-center px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="badge badge-lg bg-white text-orange-500 border-none">
              Hot Deals 🔥
            </p>
            <h1 className="text-5xl md:text-7xl font-black text-white mt-5">
              Summer Sale 50% OFF
            </h1>
            <p className="text-white text-lg mt-5">
              Sunglasses, skincare, outfits, beach accessories and everything
              you need for a fresh summer.
            </p>
            <a href="/products" className="btn bg-white text-orange-500 mt-7">
              Explore Products
            </a>
          </div>

          <div className="bg-white/30 backdrop-blur p-6 rounded-3xl shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
              alt="summer"
              className="rounded-3xl h-[420px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-4xl font-black text-center mb-10">
          Popular Products
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-10">
            Summer Care Tips
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl bg-orange-50 shadow">
              <h3 className="text-xl font-bold">Stay Hydrated</h3>
              <p className="mt-3">Drink enough water during hot sunny days.</p>
            </div>
            <div className="p-8 rounded-3xl bg-yellow-50 shadow">
              <h3 className="text-xl font-bold">Use Sunscreen</h3>
              <p className="mt-3">Apply sunscreen before going outside.</p>
            </div>
            <div className="p-8 rounded-3xl bg-pink-50 shadow">
              <h3 className="text-xl font-bold">Wear Light Clothes</h3>
              <p className="mt-3">Choose breathable outfits for comfort.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-4xl font-black text-center mb-10">Top Brands</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {["SunShade", "GlowCare", "OceanWear", "AquaFresh"].map((brand) => (
            <div
              key={brand}
              className="bg-white p-8 rounded-3xl shadow text-center font-black text-orange-500"
            >
              {brand}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}