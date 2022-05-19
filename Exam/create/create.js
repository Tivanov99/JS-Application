import page from "../node_modules/page/page.mjs";

export async function create() {
    let url = 'http://localhost:3030/data/books'


    let title = document.querySelector('#title');
    let description = document.querySelector('#description');
    let imageUrl = document.querySelector('#image');
    let bookType = document.querySelector('#type');


    let token = localStorage.getItem('authToken');

    //taking all inputs with his ID
    if (title.value != '' && description.value != '' && imageUrl.value != '') {
        await fetch(url, {
            method: "POST",
            headers: {
                'X-Authorization': token,
                'Content-Type': 'aplication/json'
            },
            body: JSON.stringify({
                title: title.value,
                description: description.value,
                imageUrl: imageUrl.value,
                type: bookType.value,
            })
        })
        page.redirect('/dashboard');
    }
}