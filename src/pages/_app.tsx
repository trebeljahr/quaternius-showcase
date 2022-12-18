import { useRef } from 'react'
import dynamic from 'next/dynamic'
import Header from '@/config'
import Layout from '@/components/dom/Layout'
import '@/styles/index.css'
import Script from 'next/script'

const Scene = dynamic(() => import('@/components/canvas/Scene'), { ssr: true })

export default function App({ Component, pageProps = { title: 'index' } }) {
  const ref = useRef()
  return (
    <>
      <Script async src='https://www.googletagmanager.com/gtag/js?id=G-FZYX7YZ8V7' />
      <Script id='gtaginit'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-FZYX7YZ8V7');
       `}
      </Script>
      <Header title={pageProps.title} />
      <Component {...pageProps} />

      <Layout ref={ref}>
        {Component?.canvas && (
          <Scene className='pointer-events-none' eventSource={ref} eventPrefix='client'>
            {Component.canvas(pageProps)}
          </Scene>
        )}
      </Layout>
    </>
  )
}
