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
      contents = contents.replace(new RegExp(`useGLTF('/${file}.glb`, 'g'), `useGLTF('/glb/${packName}/${file}.glb`)
      contents = contents.replace(new RegExp(`/glb/glb/`, 'g'), `/glb/`)

      await writeFile(filePath, contents)
    }

    const importStatements = components.map((name) => `export { Model as ${name} } from './${name}'`)
    const fileContent = `${importStatements.join('\n')}`

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
  await writeFile(filePath, fileContent)
  console.log('Successfully wrote import file for quaternius directories')
}

codeGenForImports().then(() => console.log('Done'))
