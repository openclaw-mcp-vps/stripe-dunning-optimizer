import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Stripe Dunning Optimizer — Smart Retry Timing for Failed Payments',
  description: 'Analyze failed payment patterns and optimize retry timing to maximize successful collections for your Stripe subscriptions.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="3ce9a436-0d97-4f29-a121-255d16e24a1c"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
