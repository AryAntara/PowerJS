import { PAGES } from "./global.js";

/**
 * Look for the page was created
 * @param {number} index
 */
export function look(index) {

    const page = PAGES[index-1]
    if (!page) return console.log('Page not found')

    console.log("==== PAGES (", page.date, ")")
    console.log(page.title, "\n")
    console.log(page.paragraphs.join("\n\n"))
}

/**
 * List pages 
 */
export function listPages() {
    for (let index in PAGES) {
        console.log(index + 1, PAGES[index].title)
    }
}

