// app/layout.js
import './globals.css'
import { Poppins } from 'next/font/google'
import { Analytics } from "@vercel/analytics/next"

import LoaderManager from './components/LoaderManager';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300','400','500','600','700'], // only include the weights you need
  display: 'swap',
  variable: '--font-poppins' // optional if you want to use CSS variable
})

export const metadata = {
  title: "Saasto",
  description: "A collaboration time tracking that you need",
  icons: {
    icon: "/favicon.ico",                 // fallback / default
    shortcut: "/favicon-32x32.png",       // used for some browsers
    apple: "/apple-touch-icon.png",       // iOS
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className /* or poppins.variable */}>
      <body>
      <LoaderManager>{children}</LoaderManager>
      <Analytics/>
      </body>
    </html>
  )
}

