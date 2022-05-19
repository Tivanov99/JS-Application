import { render } from "../node_modules/lit-html/lit-html.js"

import { profileTemplate } from "./profileTemplate.js"
import { renderNavi } from "../navigationBar/naviRender.js"
import { getCreatorData } from "./getAllCreatorMemes.js"
import { itemTemplate } from "../catalog/itemTemplate.js"
export async function profilePageRender() {
    renderNavi();
    let books = await getCreatorData();
    console.log(books);
    if (books.length > 0) {
        books = books.map(x => itemTemplate(x));
    }
    render(profileTemplate(books), document.querySelector('main'))
}