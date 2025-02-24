const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

//  Show input error msg
function showError(input, message) {
    const formControl = input.parentElement
    const small = formControl.querySelector('small')
    formControl.classList.add('error')
    small.innerText = message
}

// Success fxn
function showSuccess(input){
    const formControl = input.parentElement
    formControl.classList.add('success')
}

function validEmail(email){
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    console.log(re.test(email))
    return re.test(email) // returns a boolean
}

//  Event Listner
form.addEventListener('submit', (event) => {
    event.preventDefault()
    // console.log(username.value)
    if (username.value === '') {
        showError(username, "Username is required")
    } else {
        showSuccess(username);
    }

    if (email.value === "") {
        showError(email, "Email is required") 
    } else if (!validEmail(email.value)) {
        showError(email, "Email is not valid")
    }
    else {
        showSuccess(email);
    }
})