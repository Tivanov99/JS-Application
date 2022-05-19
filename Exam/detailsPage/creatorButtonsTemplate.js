import { html } from "../node_modules/lit-html/lit-html.js"

import { deleteData } from "../deleteBTN/del.js"
export function creatorButtonsTemplate(ownerId, bookId) {

    let currentUserId = localStorage.getItem('userId');
    if (currentUserId === ownerId) {
        //         return html`
        //         <a class="button warning" href="/edit/${memeId}">Edit</a>
        //         <button class="button danger" onclick="return false" @click="${deleteData}">Delete</button>
        // `
        //         return html`
        //         <div class="listings-buttons">
        //             <a href="/edit/${bookId}" class="button-list">Edit</a>
        //             <a href="/delete" class="button-list" onclick="return false" @click="${deleteData}">Delete</a>
        //         </div>
        // `
        return html`
<a class="button" href="/edit/${bookId}">Edit</a>
<a class="button" href="/delete" onclick="return false" @click="${deleteData}">Delete</a>`

    }
}
