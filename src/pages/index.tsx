import dynamic from 'next/dynamic'

const Logo = dynamic(() => import('@/components/canvas/Logo'), { ssr: false })

export default function Page() {
  return <></>
}

Page.canvas = () => <Logo />

export async function getStaticProps() {
  return { props: { title: 'Index' } }
}
