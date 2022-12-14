let name = document.querySelector('#name');
let btn = document.querySelector('#btn');
let company = document.querySelector('#company');
let email = document.querySelector('#email');
let message = document.querySelector('#message');

let nameResult = ''
let companyResult = ''
let emailResult = ''
let messageResult = ''

name.addEventListener('input', (event) => {
    nameResult = event.target.value
    
  })
company.addEventListener('input', (event) => {
    companyResult = event.target.value
    
  })
  email.addEventListener('input', (event) => {
    emailResult = event.target.value
    
  })
  message.addEventListener('input', (event) => {
    messageResult = event.target.value
    
  })
  

btn.addEventListener('click', (event) => {
    event.preventDefault()
    if(nameResult.length===0 || companyResult.length===0 || emailResult.length===0 || messageResult.length===0){
        name.style.border = '1px solid red'
        company.style.border = '1px solid red'
        email.style.border = '1px solid red'
        message.style.border = '1px solid red'

    }else{
        console.log(nameResult)
    }

    
})