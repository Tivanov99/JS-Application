import { render } from "../node_modules/lit-html/lit-html.js"

import { guestHomePageTemplate } from "./guestHomePageTemplate.js"
import { renderNavi } from "../navigationBar/naviRender.js"

export function guestHomePageRender() {
    renderNavi();
    render(guestHomePageTemplate(), document.querySelector('main'))
}