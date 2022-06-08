function validate(){
    
    inputName = document.querySelector('#name').value;
    inputEmail = document.querySelector('#email').value;
    inputBirthday = document.querySelector('#birth').value;
    
    if(inputName==null || inputName==""){
        alert('Por favor preencha o campo nome');
        document.querySelector('#name').focus();
        return false;     
    }
    if(inputEmail==null || inputEmail==""){
        alert('Por favor preencha o campo nome');
        document.querySelector('Email').focus();
        return false;     
    }
    if(inputEmail==null || inputEmail==""){
        alert('Por favor preencha o campo nome');
        document.querySelector('email').focus();
        return false;     
    }
}