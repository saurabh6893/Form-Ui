const form = document.getElementById('myForm')
const uName = document.getElementById('name')
const eMail = document.getElementById('email')
const passone = document.getElementById('passone')
const passtwo = document.getElementById('passtwo')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  if (uName.value === '') {
    showError(uName, 'Username is madatory')
  } else {
    showSuccess(uName)
  }
})
