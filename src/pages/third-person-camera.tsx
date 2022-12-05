import dynamic from 'next/dynamic'

const ThirdPersonDemo = dynamic(() => import('@/components/canvas/ThirdPersonDemo'), { ssr: false })

export default function Page() {
  return <></>
}

Page.canvas = () => <ThirdPersonDemo />

export async function getStaticProps() {
  return { props: { title: 'Index' } }
}
