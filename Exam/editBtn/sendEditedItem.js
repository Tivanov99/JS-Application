import page from "../node_modules/page/page.mjs";

export async function sendEditedItem() {
    // console.log(window.location.pathname);
    //taking current Item ID from url

    let currentWebUrl = window.location.pathname.split('/');
    let currentItemId = currentWebUrl[2];
    console.log(currentItemId);

    let title = document.querySelector('#title');
    let description = document.querySelector('#description');
    let imageUrl = document.querySelector('#image');
    let bookType = document.querySelector('#type');


    let token = localStorage.getItem('authToken');

    if (title.value != '' && description.value != '' && imageUrl.value != '') {
        let url = 'http://localhost:3030/data/books/'
        await fetch(`${url}${currentItemId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                'X-Authorization': token
            },
            body: JSON.stringify({
                title: title.value,
                description: description.value,
                imageUrl: imageUrl.value,
                type: bookType.value
            })
        })
        page.redirect(`/details/${currentItemId}`);
    }
}