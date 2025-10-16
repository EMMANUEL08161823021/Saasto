// pages/_app.js
import '../../globals.css' // ← make sure this path is correct for your project
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600'], // include only the weights you need
  display: 'swap'
})

export default function MyApp({ Component, pageProps }) {
  return (
    // apply the automatic className from next/font to the whole app
    <main className={poppins.className}>
      <Component {...pageProps} />
    </main>
  )
}
