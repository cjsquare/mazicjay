const form =
document.getElementById("myform");

form.addEventListener('submit',function(event){
event.preventDefault()

const surname = document.getElementById("surname").value;

const firstname = 
document.getElementById("firstname").value;

const middlename = 
document.getElementById("middlename").value;


const email = 
document.getElementById('email').value;

const dob = 
document.getElementById("dob").value;

const phone = 
document.getElementById("phone").value;

const experience = 
document.getElementById("experience").value;

alert(`SURNAME: ${surname}, FIRSTNAME: ${firstname}, MIDDLENAME: ${middlename}, DATE OF BIRTH: ${dob}, EMAIL: ${email},EXPERIENCE:${experience} PHONE: ${phone}`);
});