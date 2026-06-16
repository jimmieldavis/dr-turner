import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Dr. Shairi Turner | Physician. Mental Health Advocate. Chief Health Officer.',
  description:
    'Dr. Shairi Turner is a physician, public health leader, and Chief Health Officer at Crisis Text Line. Stanford, Case Western, Mass General, Harvard. 217 media engagements. Booking and media inquiries welcome.',
  keywords: [
    'Shairi Turner',
    'Dr. Shairi Turner',
    'mental health',
    'youth mental health',
    'Crisis Text Line',
    'speaker',
    'physician',
    'public health',
  ],
  openGraph: {
    title: 'Dr. Shairi Turner',
    description:
      'Physician. Mental Health Advocate. Chief Health Officer at Crisis Text Line.',
    url: 'https://drshairi.com',
    siteName: 'Dr. Shairi Turner',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Shairi Turner',
    description:
      'Physician. Mental Health Advocate. Chief Health Officer at Crisis Text Line.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
