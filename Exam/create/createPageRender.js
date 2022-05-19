import { render } from "../node_modules/lit-html/lit-html.js"

import { renderNavi } from "../navigationBar/naviRender.js"
import { createPageTemplate } from "./createPageTemplate.js"
export function createPageRender() {
    renderNavi();
    render(createPageTemplate(), document.querySelector('main'));
}
