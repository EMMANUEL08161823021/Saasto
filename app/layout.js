// app/layout.js
import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300','400','500','600','700'], // only include the weights you need
  display: 'swap',
  variable: '--font-poppins' // optional if you want to use CSS variable
})

export const metadata = {
  title: "Saasto",
  description: "A collaboration time tracking that you need",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className /* or poppins.variable */}>
      <body>{children}</body>
    </html>
  )
}


// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" className={poppins.variable}>
//       <body className="font-sans">{children}</body>
//     </html>
//   )
// }

