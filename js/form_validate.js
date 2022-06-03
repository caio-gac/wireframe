//usar onfocus ?
function validate(){
    
    inputName = document.getElementById('name').value;
    inputEmail = document.getElementById('email').value;
    inputBirthday = document.getElementById('birth').value;
    x = document.getElementById(yesyes).value;
    if(x==null || x==""){
        alert('Por favor preencha o campo '+(inputName || inputEmail || inputBirthday)+'');
        document.getElementById(yesyes).focus();
        return false;     
    }
}