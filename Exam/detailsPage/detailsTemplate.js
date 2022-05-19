import { html } from "../node_modules/lit-html/lit-html.js"
import { creatorButtonsTemplate } from "./creatorButtonsTemplate.js"
export function detailsPageTemplate(book) {
    //paste new Template
    //     return html`
    //     <section id="meme-details">
    //         <h1>Meme Title: ${meme.title}
    //         </h1>
    //         <div class="meme-details">
    //             <div class="meme-img">
    //                 <img alt="meme-alt" src="${meme.imageUrl}">
    //             </div>
    //             <div class="meme-description">
    //                 <h2>Meme Description</h2>
    //                 <p>
    //                     ${meme.description}
    //                 </p>
    //                 ${creatorButtonsTemplate(meme._ownerId, meme._id)}
    //                 <!-- Buttons Edit/Delete should be displayed only for creator of this meme  -->
    //             </div>
    //         </div>
    //     </section>
    // `
    //     return html`
    // <section id="listing-details">
    //     <h1>Details</h1>
    //     <div class="details-info">
    //         <img src="${car.imageUrl}">
    //         <hr>
    //         <ul class="listing-props">
    //             <li><span>Brand:</span>${car.brand}</li>
    //             <li><span>Model:</span>${car.model}</li>
    //             <li><span>Year:</span>${car.year}</li>
    //             <li><span>Price:</span>${car.price}$</li>
    //         </ul>

    //         <p class="description-para">${car.description}</p>

    //         ${creatorButtonsTemplate(book._ownerId, book._id)}
    //     </div>
    // </section>
    // `

    return html`
<section id="details-page" class="details">
    <div class="book-information">
        <h3>${book.title}</h3>
        <p class="type">Type: ${book.type}</p>
        <p class="img"><img src="${book.imageUrl}"></p>
        <div class="actions">
            ${creatorButtonsTemplate(book._ownerId, book._id)}
            <!-- Edit/Delete buttons ( Only for creator of this book )  -->
            <!-- Bonus -->
            <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
            <a class="button" href="#">Like</a>
            <!-- ( for Guests and Users )  -->
            <div class="likes">
                <img class="hearts" src="/images/heart.png">
                <span id="total-likes">Likes: 0</span>
            </div>
            <!-- Bonus -->
        </div>
    </div>
    <div class="book-description">
        <h3>Description:</h3>
        <p>${book.description}</p>
    </div>
</section>
`
}

