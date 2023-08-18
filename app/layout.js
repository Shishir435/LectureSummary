import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lecture Summary:Udemy and Coursera',
  description: 'Lecture Summary: Udemy and Coursera a google chrome extension helping users to grt summary of Udemy and Corsera video lecture summary',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
