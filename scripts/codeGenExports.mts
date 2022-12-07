import { readdir, readFile, writeFile } from 'fs/promises'
import { join } from 'path'

async function codeGenForImports() {
  const quaterniusDirectoryPath = join(process.cwd(), 'src', 'components', 'quaternius')

  const namesOfPacks = (await readdir(quaterniusDirectoryPath)).filter((name) => name !== 'index.ts')

  for (const packName of namesOfPacks) {
    const modelPackPath = join(quaterniusDirectoryPath, packName)
    const components = (await readdir(modelPackPath))

      .filter((name) => name !== 'index.ts')
      .map((name) => name.split('.')[0])

    for (const file of components) {
      const filePath = join(modelPackPath, file + '.tsx')
      let contents = await readFile(filePath, 'utf-8')
      contents = contents.replace(new RegExp('<GLTFActions>', 'g'), '')
      contents = contents.replace(
        `}
}

type ActionName`,

        `},
  animations: GLTFAction[],
}

type ActionName`,
      )
      contents = contents.replace(
        'type GLTFActions = Record<ActionName, THREE.AnimationAction>',
        `
interface GLTFAction extends THREE.AnimationClip {
  name: ActionName
}`,
      )

      contents = contents.replace(new RegExp(`useGLTF\\('/${file}\\.glb`, 'g'), `useGLTF('/glb/${packName}/${file}.glb`)
      contents = contents.replace(new RegExp(`\\) as GLTFResult`, 'g'), `) as unknown as GLTFResult`)
      contents = contents.replace(
        new RegExp(`useGLTF\\.preload\\('/${file}\\.glb`, 'g'),
        `useGLTF.preload('/glb/${packName}/${file}.glb`,
      )

      contents = contents.replace(new RegExp(`/glb/glb/`, 'g'), `/glb/`)
      contents = contents.replace(
        new RegExp(`useGLTF\\('/glb/${packName}/glb/${packName}/${file}\\.glb`, 'g'),
        `useGLTF('/glb/${packName}/${file}.glb`,
      )
      contents = contents.replace(new RegExp(`export function Model`, 'g'), `export default function Model`)

      await writeFile(filePath, contents)
    }

    const importStatements = components.map(
      (name) => `export const ${name} = dynamic(() => import('./${name}'), { ssr: false })`,
    )
    // const importStatements = components.map((name) => `export { Model as ${name} } from './${name}'`)
    const fileContent = `import dynamic from 'next/dynamic'\n\n${importStatements.join('\n')}\n`

    const filePath = join(modelPackPath, 'index.ts')
    await writeFile(filePath, fileContent)
    console.log('Successfully wrote import file for', packName)
  }

  const fileContent = namesOfPacks
    .map((name) => {
      return `export * as ${name} from './${name}'`
    })
    .join('\n')

  const filePath = join(quaterniusDirectoryPath, 'index.ts')
  await writeFile(filePath, fileContent + '\n')
  console.log('Successfully wrote import file for quaternius directories')
}

codeGenForImports().then(() => console.log('Done'))
