import { html } from "../node_modules/lit-html/lit-html.js"

export function profileTemplate(books) {

    return html `
        <section id="my-books-page" class="my-books">
            <h1>My Books</h1>
            <!-- Display ul: with list-items for every user's books (if any) -->
            ${books.length == 0 ? NoneBooks() :  html` <ul class="my-books-list">${books}</ul>`}
            <!-- Display paragraph: If the user doesn't have his own books  -->
        </section>
    `
}

function NoneBooks() {
    return html`<p class="no-books">No books in database!</p>`
}
