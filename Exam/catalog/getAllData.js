export async function getData() {
    let url = 'http://localhost:3030/data/books?sortBy=_createdOn%20desc';
    //  let token = localStorage.getItem('authToken');
    const request = await fetch(url, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            //  'X-Authorization': token
        }
    })
    let data = request.json();
    return await data;
}