import { Template } from "./Lib/Template";
import { Draw } from "./Lib/Draw";

const draw = new Draw
const cmd = {
    "handler": draw, 
    "detail": 'printDetail',
    'quiet' : 'printQuiet',
}

export {
    Template, draw, cmd 
}