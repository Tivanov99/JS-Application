
export async function getCreatorData() {
    let url = 'http://localhost:3030';
    let userId = localStorage.getItem('userId')
    let add = `/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`;
    //  let token = localStorage.getItem('authToken');
    const request = await fetch(`${url}${add}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            //  'X-Authorization': token
        }
    })
    let data = request.json();
    return await data;
}