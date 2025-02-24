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

function checkReq(inputArr){
    inputArr.forEach(input => {
        console.log(input.value)
        if (input.value.trim() === '') {
            let str = input.id
            str = str.replace(/^./, str[0].toUpperCase())
            showError(input, `${str} required`)
        }
    });
}

function checkLen(input, min, max) {
    if (input.value.length < min) {
        showError(input, `Does not meet ${input.id} min length requirements`)
    } else if (input.value.length > max) {
        showError(input, `${input.id} too long`)
    } else {
        showSuccess(input)
    }
}

//  Event Listner
form.addEventListener('submit', (event) => {
    event.preventDefault()

    checkReq([username,email,password,password2])
    checkLen(username, 3, 15)
    checkLen(password, 6, 25)
    
})