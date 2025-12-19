import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">VisitSalone</Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/beaches" className="text-gray-700 hover:text-gray-900">Beaches</Link>
          <Link href="/nature" className="text-gray-700 hover:text-gray-900">Nature</Link>
          <Link href="/culture" className="text-gray-700 hover:text-gray-900">Culture</Link>
          <Link href="/operators" className="text-gray-700 hover:text-gray-900">Operators</Link>
          <Link href="/contact" className="text-gray-700 hover:text-gray-900">Contact</Link>
        </nav>
        <div className="md:hidden">{/* mobile menu placeholder */}</div>
      </div>
    </header>
  )
}
