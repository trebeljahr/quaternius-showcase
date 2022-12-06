import { readdir } from 'fs/promises'
import { join } from 'path'

async function codeGenForImports() {
  const modelsComponentsPath = join(process.cwd(), 'src', 'components', 'models')
  const components = (await readdir(modelsComponentsPath)).map((name) => name.split('.')[0])
  const importStatements = components.map((name) => `export { Model as ${name} } from "./${name}.tsx"`)
  console.log(components)
  console.log(importStatements)
  const string = `${importStatements.join('\n')}`
  console.log(string)
}

await codeGenForImports()
