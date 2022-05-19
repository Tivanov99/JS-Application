import { render } from "../node_modules/lit-html/lit-html.js";

import { navigationTemplate } from "./navigationBarTemplate.js"

export function renderNavi() {
    let place = document.querySelector('#navi');
    render(navigationTemplate(), place)
}