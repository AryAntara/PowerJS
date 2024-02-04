import { Template } from "./Lib/Template"
import { PAGES } from "./global"
import { listPages,look } from "./handler"


const cmd = {
    handler: {
        look,
        listPages
    },
    look: 'look',
    list: 'listPages'
}

export {
    Template, cmd
}