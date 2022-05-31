function validate(){
    yesyes = 0
    x = document.getElementById(yesyes).value;
    if(x==null || x==""){
        alert('Por favor preencha o campo '+yesyes+'');
        document.getElementById(yesyes).focus();
        return false;
    }
}