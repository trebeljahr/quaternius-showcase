import { dir } from 'console'
import { readdir, writeFile } from 'fs/promises'
import { join } from 'path'

async function codeGenForImports() {
  const modelsComponentsPath = join(process.cwd(), 'src', 'components', 'quaternius')

  const namesOfPacks = await readdir(modelsComponentsPath)

  for (const packName of namesOfPacks) {
    const modelPackPath = join(modelsComponentsPath, packName)
    const components = (await readdir(modelPackPath)).map((name) => name.split('.')[0])
    const importStatements = components.map((name) => `export { Model as ${name} } from "./${name}"`)
    const fileContent = `${importStatements.join('\n')}`

    const filePath = join(modelPackPath, 'index.ts')
    await writeFile(filePath, fileContent)
    console.log('Successfully wrote import file for', packName)
  }

  const allImports = namesOfPacks.map((name) => {
    return `export * as ${name} from "./${name}`
  })
  console.log(allImports)

  // await writeFile()
}

await codeGenForImports()
