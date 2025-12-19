import './globals.css'
import { ReactNode } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  title: 'VisitSalone',
  description: "Discover Sierra Leone's beaches, mountains, culture and adventure.",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
