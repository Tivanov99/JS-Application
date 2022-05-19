import { html } from "../node_modules/lit-html/lit-html.js"
import { sendEditedItem } from "./sendEditedItem.js"
export function editPageTemplate(book) {
    //change template and CHECK BUTTONS AND HREF'S
    //     return html`
    //     <section id="edit-meme">
    //         <form id="edit-form">
    //             <h1>Edit Meme</h1>
    //             <div class="container">
    //                 <label for="title">Title</label>
    //                 <input id="title" type="text" value="${currMeme.title}" placeholder="Enter Title" name="title">
    //                 <label for="description">Description</label>
    //                 <textarea id="description" placeholder="Enter Description"
    //                     name="description">${currMeme.description}</textarea>
    //                 <label for="imageUrl">Image Url</label>
    //                 <input value="${currMeme.imageUrl}" id="imageUrl" type="text" placeholder="Enter Meme ImageUrl"
    //                     name="imageUrl">
    //                 <input type="submit" class="registerbtn button" onclick="return false" @click="${sendEditedItem}"
    //                     value="Edit Meme">
    //             </div>
    //         </form>
    //     </section>
    // `

    //     return html`
    // <section id="edit-listing">
    //     <div class="container">

    //         <form id="edit-form">
    //             <h1>Edit Car Listing</h1>
    //             <p>Please fill in this form to edit an listing.</p>
    //             <hr>

    //             <p>Car Brand</p>
    //             <input id="brand" type="text" placeholder="Enter Car Brand" name="brand" value="${currCar.brand}">

    //             <p>Car Model</p>
    //             <input id="model" type="text" placeholder="Enter Car Model" name="model" value="${currCar.model}">

    //             <p>Description</p>
    //             <input id="description" type="text" placeholder="Enter Description" name="description"
    //                 value="${currCar.description}">

    //             <p>Car Year</p>
    //             <input id="year" type="number" placeholder="Enter Car Year" name="year" value="${currCar.year}">

    //             <p>Car Image</p>
    //             <input id="imageUrl" type="text" placeholder="Enter Car Image" name="imageUrl" value="${currCar.imageUrl}">

    //             <p>Car Price</p>
    //             <input id="price" type="number" placeholder="Enter Car Price" name="price" value="${currCar.price}">

    //             <hr>
    //             <input onclick="return false" @click="${sendEditedItem}" type="submit" class="registerbtn"
    //                 value="Edit Listing">
    //         </form>
    //     </div>
    // </section>
    // `

    return html`
    <section id="edit-page" class="edit">
        <form id="edit-form" action="#" method="">
            <fieldset>
                <legend>Edit my Book</legend>
                <p class="field">
                    <label for="title">Title</label>
                    <span class="input">
                        <input type="text" name="title" id="title" value="${book.title}">
                    </span>
                </p>
                <p class="field">
                    <label for="description">Description</label>
                    <span class="input">
                        <textarea name="description" id="description">${book.description}</textarea>
                    </span>
                </p>
                <p class="field">
                    <label for="image">Image</label>
                    <span class="input">
                        <input type="text" name="imageUrl" id="image" value="${book.imageUrl}">
                    </span>
                </p>
                <p class="field">
                    <label for="type">Type</label>
                    <span class="input">
                        <select id="type" name="type" value="Fiction">
                            <option value="Fiction" selected>Fiction</option>
                            <option value="Romance">Romance</option>
                            <option value="Mistery">Mistery</option>
                            <option value="Classic">Clasic</option>
                            <option value="Other">Other</option>
                        </select>
                    </span>
                </p>
                <input class="button submit" onclick="return false" @click="${sendEditedItem}" type="submit" value="Save">
            </fieldset>
        </form>
    </section>`

}