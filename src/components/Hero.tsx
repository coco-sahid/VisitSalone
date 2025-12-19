export default function Hero() {
  return (
    <section className="relative h-[60vh] bg-gray-800 text-white flex items-center">
      <div className="absolute inset-0 bg-[url('/public/hero-placeholder.jpg')] bg-cover bg-center opacity-60" />
      <div className="relative max-w-6xl mx-auto px-4 z-10">
        <h1 className="text-4xl md:text-6xl font-bold">Discover West Africa's Hidden Paradise</h1>
        <p className="mt-4 text-lg text-gray-100 max-w-2xl">Explore pristine beaches, lush rainforests, and vibrant culture in Sierra Leone.</p>
        <div className="mt-6 flex space-x-3">
          <button className="bg-amber-400 text-black px-4 py-2 rounded-md">Plan Your Adventure</button>
          <button className="border border-white px-4 py-2 rounded-md">Watch Video Tour</button>
        </div>
      </div>
    </section>
  )
}
