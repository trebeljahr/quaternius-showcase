import { readdir } from 'fs/promises'
import dynamic from 'next/dynamic'
import { join } from 'path'

const ThirdPersonDemo = dynamic(() => import('@/components/canvas/ThirdPersonDemo'), { ssr: false })

export default function Page() {
  return <></>
}

Page.canvas = () => <ThirdPersonDemo />

function codeGenForImports() {
  // const modelsComponentsPath = join(process.cwd(), 'src', 'components', 'models')
  // const components = (await readdir(modelsComponentsPath)).map((name) => name.split('.')[0])
  // const importStatements = components.map((name) => `import { Model as ${name} } from "@components/models/${name}.tsx"`)
  // const exportStatements = components.map((name) => `export ${name}`)
  // console.log(components)
  // console.log(importStatements)
  // console.log(exportStatements)
  // const string = `${importStatements.join('\n')}\n${exportStatements.join('\n')}`
  // console.log(string)
}
export async function getStaticProps() {
  return { props: { title: 'Index' } }
}
