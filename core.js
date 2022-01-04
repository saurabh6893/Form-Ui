const form = document.getElementById('form')
const uName = document.getElementById('name')
const eMail = document.getElementById('email')
const passone = document.getElementById('password')
const passtwo = document.getElementById('password2')

// for error messages

function theError(input, message) {
  const formB = input.parentElement
  formB.className = 'box error'
  const small = formB.querySelector('small')
  small.innerText = message
}

//for success messages

function theSuccess(input) {
  const formB = input.parentElement
  formB.className = 'box success'
}
// for email validation
function emailValidation(eMail) {
  const td =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+[^<>()\.,;:\s@\"]{2,})$/

  return td.test(String(eMail).toLocaleLowerCase())
}

//case fix
function caseFix(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1).toLowerCase()
}

//do basic checks
function basicChecks(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === '') {
      theError(input, `${caseFix(input)} is mandatory`)
    } else {
      theSuccess(input)
    }
  })
}

//event Listening function
form.addEventListener('submit', function (e) {
  e.preventDefault()
  basicChecks([uName, eMail, passone, passtwo])
})
