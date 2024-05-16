var email = document.forms['form']['email'];
var password =document.forms['form']['password'];
var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('pass_error');
email.addventListener('textInput',email_Verify);
password.addventListener('textInput',pass_Verify);

function validated(){
    if (email.value.length < 9){
        email.style.border = "1px solid red";
        email.error.style.display ="block";
        email.focus();
        return false;
    }
    if (email.value.length < 6){
        email.style.border = "1px solid red";
        email.error.style.display ="block";
        email.focus();
        return false;
    }

}
function email_Verify(){
    if (email.value.length >= 8){
        email.style.border = "1px solid silver";
        email.error.style.display ="none";
        return true;
    }
}
function pass_Verify_Verify(){
    if (password.value.length >= 5){
        password.style.border = "1px solid silver";
        pass_error.error.style.display ="none";
        return true;
    }
}