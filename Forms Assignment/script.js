const date = document.getElementById('date')
const name = document.getElementById('name')
const password = document.getElementById('password')
const age = document.getElementById('age')
const email = doucment.getElementById('email')
const error = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []
    if (password.value.length <= 5) {
        messages.push('Password must be longer than 5 characters.')
    }
    if (messages.length > 0) {

        e.preventDefault()
        errorElement.innterText = messages.join(',')
    }
})