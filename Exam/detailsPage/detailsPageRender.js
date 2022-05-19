import { render } from "../node_modules/lit-html/lit-html.js"

import { renderNavi } from "../navigationBar/naviRender.js"
import { detailsPageTemplate } from "./detailsTemplate.js"
import { getOne } from "./getOne.js";
export async function detailsPageRender(ctx) {
    renderNavi();
    
    let carId = ctx.params.id;
    console.log(carId);
    let car = await getOne(carId);
    render(detailsPageTemplate(car), document.querySelector('main'))
}