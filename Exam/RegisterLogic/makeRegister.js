import page from "../node_modules/page/page.mjs";

export async function register() {
    let url = 'http://localhost:3030/users/register';

    let email = document.querySelector('#email');
    let password = document.querySelector('#password');
    let repeatPass = document.querySelector('#repeat-pass');


    let emailValue = email.value;
    let passwordValue = password.value;

    if (email.value != '' && password.value != '' && repeatPass.value != ''
        && password.value === repeatPass.value)
        await fetch(url, {
            method: "POST",
            headers: { "Content-type": "application.json" },
            body: JSON.stringify({
                email: emailValue,
                password: passwordValue,
            })
        })
            .then(function (resp) {
                if (resp.ok) {
                    return resp.json();
                }
                alert("Wrong info")
            })
            .then(function (data) {
                localStorage.setItem('authToken', data.accessToken)
                localStorage.setItem('userId', data._id)
                localStorage.setItem('email', data.email)
                page.redirect('/dashboard')
            })
            .catch(function (err) {

            })
}
