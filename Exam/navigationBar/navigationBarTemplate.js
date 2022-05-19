import { html } from "../node_modules/lit-html/lit-html.js";
import { getUserData } from "../getAuth/getAuth.js"
export function navigationTemplate() {
    let res = getUserData();
    if (res == null) {
        return html`
        <section class="navbar-dashboard">
            <a href="/dashboard">Dashboard</a>
            <!-- Guest users -->
            <div id="guest">
                <a class="button" href="/login">Login</a>
                <a class="button" href="/register">Register</a>
            </div>
            <!-- Logged-in users -->
        </section>
         `
    } else {
        return html`
    <section class="navbar-dashboard">
        <a href="/dashboard">Dashboard</a>
        <!-- Logged-in users -->
        <div id="user">
            <span>Welcome, ${localStorage.getItem('email')}</span>
            <a class="button" href="my-books">My Books</a>
            <a class="button" href="/create-book">Add Book</a>
            <a class="button" href="/logout">Logout</a>
        </div>
    </section>`
    }
}