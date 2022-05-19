export async function getOne(id) {
    let url = 'http://localhost:3030/data/books/';
    let requst = await fetch(`${url}${id}`)
    let data = requst.json();
    return data;
}