function validate(){
    yesyes = 0
    inputName = document.getElementById('name');
    inputEmail = document.getElementById('email');
    inputBirthday = document.getElementById('birth');
    x = document.getElementById(yesyes).value;
    if(x==null || x==""){
        alert('Por favor preencha o campo '+yesyes+'');
        document.getElementById(yesyes).focus();
        return false;
    }
}