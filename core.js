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
function emailValidation(input) {
  const td =
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+[^<>()\.,;:\s@\"]{2,})$/

  if (td.test(input.value.trim())) {
    theSuccess(input)
  } else theError(input, 'The email is not valid')
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

//password verifier
function passwordVerifier(a, b) {
  if (a.value !== b.value) {
    theError(b, 'the Passords donot match')
  }
}

//length validation
function lengthCheck(input, min, max) {
  if (input.value.length < min) {
    theError(input, `${caseFix(input)} must be more than ${min} characters`)
  } else if (input.value.length > max) {
    theError(input, `${caseFix(input)} must be less than ${max} characters`)
  } else theSuccess(input)
}

//event Listening function
form.addEventListener('submit', function (e) {
  e.preventDefault()
  basicChecks([uName, eMail, passone, passtwo])
  lengthCheck(uName, 8, 15)
  lengthCheck(passone, 8, 15)
  emailValidation(eMail)
  passwordVerifier(passone, passtwo)
})
