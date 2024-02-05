import { Template } from "./Lib/Template.js"
import { PAGES } from "./global.js"
import { listPages,look } from "./handler.js"


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