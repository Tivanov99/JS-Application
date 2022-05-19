import { getData } from "./getAllData.js"
import { itemTemplate } from "./itemTemplate.js"
export async function templatingAllItems() {
    //taking all data
    const requstData = await getData();
    let templatedData;
    //templating all data
    if (requstData.length > 0) {
        templatedData = requstData.map(item => itemTemplate(item));
    }

    //returning templated data
    return await templatedData;
}