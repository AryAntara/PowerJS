import {exec} from 'child_process'
import "./Expense_February_2024.js"
import "./Page_04_Feb_2024.js"

import {cmd as CmdExpense } from "./Expense/index.js"
import {cmd as CmdPage } from "./Page/index.js"

const command = process.argv[2]
const params = process.argv.slice(3)

if(!command || (command != 'rebuild' && !params[0]) ) {
    console.log('Nothing to do!')
    process.exit(2)
}

switch(command){
    case "Expense":
        if(!CmdExpense[params[0]]) {
            console.log('Handler is Missed!')
            break
        }
        CmdExpense.handler[CmdExpense[params[0]]](...params.slice(1))
        break
    
    case "Page":
        if(!CmdPage[params[0]]) {
            console.log('Handler is Missed!')
            break
        }
        CmdPage.handler[CmdPage[params[0]]](...params.slice(1))
        break
    
    case "rebuild":
        exec('bun ./_power_generator.js')
        console.log("Rebuild success")
        break
}