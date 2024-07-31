document.addEventListener('DOMContentLoaded',function(){

const formContain = document.getElementById('form')

const form = document.createElement('form')

form.style.width = '300px'
form.style.height = '300px'
form.style.display = 'flex'
form.style.justifyContent = 'center'
form.style.flexDirection ='column'
form.style.backgroundColor ='blue'

const firstNameLabel = document.createElement('label')
const firstNameInput = document.createElement('input')

firstNameLabel.style.width = '90px'
firstNameLabel.innerHTML = 'FirstName:'
firstNameLabel.style.color = 'red'
firstNameLabel.style.fontsize = '50px'

firstNameInput.style.width = '90px'
firstNameInput.type = 'text'
firstNameInput.border = '2px solid red'


const middleNameLabel = document.createElement('label')
const middleNameInput = document.createElement('input')

middleNameLabel.style.width = '90px'
middleNameLabel.innerHTML = 'middleName:'
middleNameLabel.style.color = 'red'
middleNameLabel.style.fontsize = '50px'

middleNameInput.style.width = '90px'
middleNameInput.type = 'text'
middleNameInput.border = '2px solid red'


const ageLabel = document.createElement('label')
const ageInput = document.createElement('input')
ageLabel.style.width = '90px'
ageLabel.innerHTML = 'Age:'
ageLabel.style.color = 'red'
ageLabel.style.fontsize = '50px'

ageInput.style.width = '90px'
ageInput.type = 'number'
ageInput.border = '2px solid red'


const emailLabel = document.createElement('label')
const emailInput = document.createElement('input')

emailLabel.style.width = '90px'
emailLabel.innerHTML = 'email:'
emailLabel.style.color = 'yellow'
emailLabel.style.fontsize = '50px'

emailInput.style.width = '90px'
emailInput.type = 'text'
emailInput.border = '2px solid red'






form.appendChild(firstNameLabel)
form.appendChild(firstNameInput)


form.appendChild(firstNameLabel)
form.appendChild(firstNameInput)



form.appendChild(middleNameLabel)
form.appendChild(middleNameInput)


form.appendChild(middleNameLabel)
form.appendChild(middleNameInput)

form.appendChild(ageLabel)
form.appendChild(ageInput)

form.appendChild(emailLabel)
form.appendChild(emailInput)



formContain.appendChild(form)
})