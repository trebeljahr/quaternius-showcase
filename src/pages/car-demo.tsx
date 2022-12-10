import dynamic from 'next/dynamic'

const CarDemo = dynamic(() => import('@/components/canvas/CarDemo'), { ssr: false })

export default function Page() {
  return <></>
}

Page.canvas = () => <CarDemo></CarDemo>
