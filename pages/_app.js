// pages/_app.js
import '../app/globals.css' // update path if your globals are elsewhere
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import SiteLoader from '../app/components/loading' // adjust path if needed

export default function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    let minTimer = null
    // ensure loader is shown at least this long (ms)
    const MIN_SHOW = 800

    // Hide loader either after window load or after MIN_SHOW, whichever is later
    const handleReady = () => {
      // ensure the loader is shown for at least MIN_SHOW milliseconds
      minTimer = setTimeout(() => setLoading(false), MIN_SHOW)
    }

    // If the page has already loaded (fast refresh/dev), still wait MIN_SHOW
    if (document.readyState === 'complete') {
      handleReady()
    } else {
      window.addEventListener('load', handleReady, { once: true })
    }

    // route change handlers: show loader on navigation start
    const onStart = () => setLoading(true)
    const onComplete = () => {
      // small delay so the transition feels smooth
      setTimeout(() => setLoading(false), 300)
    }

    router.events.on('routeChangeStart', onStart)
    router.events.on('routeChangeComplete', onComplete)
    router.events.on('routeChangeError', onComplete)

    return () => {
      clearTimeout(minTimer)
      window.removeEventListener('load', handleReady)
      router.events.off('routeChangeStart', onStart)
      router.events.off('routeChangeComplete', onComplete)
      router.events.off('routeChangeError', onComplete)
    }
  }, [router.events])

  return (
    <>
      <SiteLoader visible={loading} />
      <div style={{ visibility: loading ? 'hidden' : 'visible' }}>
        <Component {...pageProps} />
      </div>
    </>
  )
}
