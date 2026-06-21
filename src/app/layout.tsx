import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import Footer from '@/components/Footer'
import SmoothScrollProvider from '@/components/SmoothScrollProvider'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export const metadata: Metadata = {
  title: 'NexloraAI — Building AI Systems That Scale Businesses',
  description:
    'NexloraAI engineers custom automation, intelligent chatbots, and high-performance software for ambitious businesses.',
  keywords:
    'web development agency India,AI app development India,mobile app development India,custom software development Indore,Next.js development agency,React development India,AI integration services,MVP development India,web development UAE,software agency Indore,SaaS development India,LLM integration',
  robots: 'index, follow',
  openGraph: {
    title: 'NexloraAI — AI App Development Agency India',
    description:
      'Top web, mobile & AI development agency in Indore, India — serving UAE & global clients. Custom software, MVPs in 7 days.',
    url: 'https://auronetics.com/nexloraai',
    siteName: 'NexloraAI',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NexloraAI — AI App Development Agency India',
    description:
      'Top web, mobile & AI development agency in India — serving UAE & global clients. MVPs in 7 days.',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="nexlora-theme min-h-screen bg-background text-foreground font-sans antialiased flex flex-col">
        <SmoothScrollProvider>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </SmoothScrollProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

