import { html } from "../node_modules/lit-html/lit-html.js"


export function ItemsSectionTemplate(books) {

    return html`
<section id="dashboard-page" class="dashboard">
    <h1>Dashboard</h1>

    ${books.length == 0 ? NoneBooks() :  html` <ul class="my-books-list">${books}</ul>`}

    
    <!-- Display ul: with list-items for All books (If any) -->
    <!-- Display paragraph: If there are no books in the database -->
</section>
`
}

function NoneBooks() {
    return html`<p class="no-books">No books in database!</p>`
}
