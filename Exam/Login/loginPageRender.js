import { render } from "../node_modules/lit-html/lit-html.js"
import { renderNavi } from "../navigationBar/naviRender.js"
import { loginTemplate } from "./loginPageTemplate.js"
export function loginPageRendering() {
    renderNavi();
    render(loginTemplate(), document.querySelector('main'))
}