export function getUserData() {
    let authToken = localStorage.getItem('authToken');
    return authToken;
}