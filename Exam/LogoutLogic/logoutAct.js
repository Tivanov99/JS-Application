import page from ".././node_modules/page/page.mjs";
export function getLogout() {
    let url = `http://localhost:3030/users/logout`;
    let token = localStorage.getItem('authToken');
    fetch(url, {
        headers: { 'X-Authorization': token }
    })
    localStorage.clear();
    page.redirect('/dashboard')
}