import { Template } from "./Lib/Template.js";
import { Draw } from "./Lib/Draw.js";

const draw = new Draw
const cmd = {
    "handler": draw, 
    "detail": 'printDetail',
    'quiet' : 'printQuiet',
}

export {
    Template, draw, cmd 
}