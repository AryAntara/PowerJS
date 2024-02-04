import {readdirSync, statSync, writeFileSync} from "fs"

const files = readdirSync('./')
const partList = files.filter(path => {
    return statSync(`./${path}`).isDirectory() && path !== '.git'
})

console.log("Part Available : ", partList.join(', '))

let importCmdScript = ''
let importPartFiles = ''
let commandParse = `
const command = process.argv[2]
const params = process.argv.slice(3)

if(!command || (command != 'rebuild' && !params[0]) ) {
    console.log('Nothing to do!')
    process.exit(2)
}

switch(command){`.trim()

for(let part of partList){
    importCmdScript += `import {cmd as Cmd${part} } from "./${part}"\n`
    
    const partFiles = files.filter(file => file.split(`${part}_`).length > 1)
    for (let partFile of partFiles){
        importPartFiles += `import "./${partFile}"\n`
    }

    commandParse += `
    case "${part}":
        if(!Cmd${part}[params[0]]) {
            console.log('Handler is Missed!')
            break
        }
        Cmd${part}.handler[Cmd${part}[params[0]]](...params.slice(1))
        break
    ` 
}

commandParse += 
`
    case "rebuild":
        exec('bun ./_power_generator.js')
        console.log("Rebuild success")
        break
}
`

const mainScript = `
import {exec} from 'child_process'
${importPartFiles}
${importCmdScript}
${commandParse}
`.trim()

writeFileSync('./pow.js', mainScript)
console.log("Pow.js Generated!")