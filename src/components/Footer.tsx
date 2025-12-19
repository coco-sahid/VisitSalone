export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-12">
      <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-gray-600">
        <div className="flex justify-between">
          <div>© {new Date().getFullYear()} VisitSalone</div>
          <div className="space-x-4">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
