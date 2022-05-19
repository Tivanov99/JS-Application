import page from "../node_modules/page/page.mjs";

export function loginRequest() {
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');

    let emailValue = email.value;
    let passwordValue = password.value;
    // console.log(emailValue)
    // console.log(passwordValue)

    if (emailValue != '' && passwordValue != '') {
        try {
            let url = 'http://localhost:3030/users/login';
            fetch(url, {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({
                    email: emailValue,
                    password: passwordValue
                })
            })
                .then(function (resp) {
                    if (resp.ok) {
                        return resp.json();
                    }
                })
                .then(function (data) {
                    console.log(data);
                    localStorage.setItem('authToken', data.accessToken)
                    localStorage.setItem('userId', data._id)
                    localStorage.setItem('email', data.email)

                    //TODO: redirect to All MEMES PAGE !!!
                    page.redirect('/dashboard')
                })
        } catch (error) {

        }
    }

}