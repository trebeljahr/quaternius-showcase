import { readdir, writeFile } from 'fs/promises'
import { join } from 'path'

async function codeGenForImports() {
  const modelsComponentsPath = join(process.cwd(), 'src', 'components', 'quaternius', 'fantasy_real_time_strategy')
  const components = (await readdir(modelsComponentsPath)).map((name) => name.split('.')[0])
  const importStatements = components.map((name) => `export { Model as ${name} } from "./${name}"`)
  console.log(components)
  console.log(importStatements)
  const fileContent = `${importStatements.join('\n')}`
  console.log(fileContent)

  const filePath = join(modelsComponentsPath, 'index.ts')
  await writeFile(filePath, fileContent)
  console.log('Successfully wrote file')
}

await codeGenForImports()
