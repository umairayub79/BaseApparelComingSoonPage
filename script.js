const form = document.getElementById('email-form');
const email = document.getElementById('email')

form.addEventListener('submit', e =>{
    e.preventDefault();
    const email_val = email.value;
    if(!validEmail(email_val)){
        form.classList.add('error');
    }else{
        form.classList.remove('error');
    }

})

function validEmail(email){
    var regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
    return regex.test(String(email).toLocaleLowerCase());
}