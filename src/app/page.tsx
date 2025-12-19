import Hero from '../components/Hero'

export default function Home() {
  return (
    <div>
      <Hero />
      <section className="max-w-6xl mx-auto p-6">
        <h2 className="text-2xl font-semibold mb-4">Featured destinations</h2>
        <p className="text-gray-600">Starter content and placeholders for destination cards.</p>
      </section>
    </div>
  )
}
