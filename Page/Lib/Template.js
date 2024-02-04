import { PAGES } from "../global.js"

export class Template {
    title = ""
    paragraphs = []
    date = new Date

    /**
     * 
     * @param {string} date 
     */
    constructor(date){
        date = new Date(Date.parse(date)) 
        PAGES.push(this)
    }

    /**
     * @param {string} title
     */
    setTitle(title) {
        this.title = title
    }

    /**
     * Create new Paragraph
     * @param {string} content
     */
    newPragraph(content){
        this.paragraphs.push(content.trim())
    }
}