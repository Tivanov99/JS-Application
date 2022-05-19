import { render } from "../node_modules/lit-html/lit-html.js"

import { renderNavi } from "../navigationBar/naviRender.js"
import { editPageTemplate } from "./editPageTemplate.js"
import { getItemForEdit } from "./getItemForEdit.js"

export async function editPageRender(ctx) {
    renderNavi();

    //taking item id from url
    let carId = ctx.params.id;
    let item = await getItemForEdit(carId);
    console.log(item);
    render(editPageTemplate(item), document.querySelector('main'))
}