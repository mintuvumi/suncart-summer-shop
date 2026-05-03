export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white px-6 py-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-3xl font-black text-orange-400">☀️ SunCart</h2>
          <p className="mt-3 text-slate-300">
            Your trusted summer essentials store.
          </p>
        </div>

        <div>
          <h3 className="font-bold mb-3">Contact</h3>
          <p>Email: support@suncart.com</p>
          <p>Phone: +880 1234 567890</p>
        </div>

        <div>
          <h3 className="font-bold mb-3">Social</h3>
          <p>Facebook  Instagram  Twitter</p>
          <p className="mt-3">Privacy Policy</p>
        </div>
      </div>

      <p className="text-center text-slate-400 mt-8">
        © 2026 SunCart. All rights reserved.
      </p>
    </footer>
  );
}