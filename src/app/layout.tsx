import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cybersecurity Portfolio | AGH Student',
  description: 'Portfolio studenta cyberbezpieczeństwa AGH - Ethical Hacker, Security Researcher',
  keywords: 'cybersecurity, ethical hacking, AGH, penetration testing, security research',
  authors: [{ name: 'Hose-Zur' }],
  openGraph: {
    title: 'Cybersecurity Portfolio | AGH Student',
    description: 'Portfolio studenta cyberbezpieczeństwa AGH',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl" className="scroll-smooth">
      <body className={`${inter.className} bg-cyber-darker text-white overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}
