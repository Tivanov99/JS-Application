import page from "../node_modules/page/page.mjs";
export async function deleteData() {
    //change with new URL
    let url = 'http://localhost:3030/data/books/'
    let currentWebUrl = window.location.pathname.split('/');
    let currentItemId = currentWebUrl[2];
    console.log(currentItemId);
    let token = localStorage.getItem('authToken');
    await fetch(`${url}${currentItemId}`, {
        method: "DELETE",
        headers: {
            'X-Authorization': token
        },
        body: null
    })
    page.redirect('/dashboard');
}