import dynamic from 'next/dynamic'

const QuaterniusShowcase = dynamic(() => import('@/components/canvas/QuaterniusShowcase'), { ssr: false })

export default function Page() {
  return <></>
}

Page.canvas = () => <QuaterniusShowcase />
