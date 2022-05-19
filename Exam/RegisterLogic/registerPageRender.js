import { render } from "../node_modules/lit-html/lit-html.js"

import { registerPageTemplate } from "./registerPageTemplate.js";
import { renderNavi } from "../navigationBar/naviRender.js"

export function registerPageRender() {
    renderNavi();
    render(registerPageTemplate(), document.querySelector('main'));
}