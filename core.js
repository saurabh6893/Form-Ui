const form = document.getElementById('form')
const uName = document.getElementById('name')
const eMail = document.getElementById('email')
const passone = document.getElementById('passone')
const passtwo = document.getElementById('passtwo')

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

//event Listening function
form.addEventListener('submit', function (e) {
  e.preventDefault()
  if (uName.value === '') {
    theError(uName, 'Username is madatory')
  } else {
    theSuccess(uName)
  }

  if (eMail.value === '') {
    theError(eMail, 'Email is required')
  } else if (!emailValidation(eMail.value)) {
    theError(eMail, 'Email is not valid')
  } else {
    theSuccess(eMail)
  }

  if (passone.value === '') {
    theError(passone, 'Enter a password')
  } else {
    theSuccess(passone)
  }

  if (passtwo.value === '') {
    theError(passtwo, 're Enter the password')
  } else {
    theSuccess(passtwo)
  }
})
