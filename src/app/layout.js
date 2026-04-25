import { Inter } from 'next/font/google'
import './globals.css'
import SmoothScroll from '@/components/SmoothScroll'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Xinyan Zheng - Portfolio',
  description: 'MERN Stack Developer Portfolio',
  icons: {
    icon: '/icon.svg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background-dark text-white font-display min-h-screen flex flex-col overflow-x-hidden antialiased selection:bg-accent-purple selection:text-white`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}
