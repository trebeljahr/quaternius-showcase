import { readdir, writeFile } from 'fs/promises'
import { join } from 'path'

async function codeGenForImports() {
  const quaterniusDirectoryPath = join(process.cwd(), 'src', 'components', 'quaternius')

  const namesOfPacks = (await readdir(quaterniusDirectoryPath)).filter((name) => name !== 'index.ts')

  for (const packName of namesOfPacks) {
    const modelPackPath = join(quaterniusDirectoryPath, packName)
    const components = (await readdir(modelPackPath))
      .filter((name) => name !== 'index.ts')
      .map((name) => name.split('.')[0])
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
  console.log('Done')
}

await codeGenForImports()
