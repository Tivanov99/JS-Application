import { render } from "../node_modules/lit-html/lit-html.js"

import { templatingAllItems } from "./templateAllImtes.js"
import { renderNavi } from "../navigationBar/naviRender.js"
import { ItemsSectionTemplate } from "./ItemsSection.js"
export async function allItemsPageRender() {
    renderNavi();
    let books = await templatingAllItems();
    render(ItemsSectionTemplate(books), document.querySelector('main'))
}