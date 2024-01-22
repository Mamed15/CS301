const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const passwordConfirm = document.querySelector('#passwordConfirm')
const myForm = document.querySelector('#myForm')

myForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const user = {
        username: username.value,
        email: email.value,
        password: password.value,
        passwordConfirm: passwordConfirm.value
    }
    console.log(user);

    if (passwordConfirm.value === password.value) {
        console.log("match");
    }
    else {
        console.log("not match");
    }
})

