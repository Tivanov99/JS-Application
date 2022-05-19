export async function getItemForEdit(id) {
    //change fetch URl
    let url = 'http://localhost:3030/data/books/';
    let requst = await fetch(`${url}${id}`);
    let data = requst.json();
    return data;
}