function validate(){
    
    inputName = document.getElementById('name').value;
    inputEmail = document.getElementById('email').value;
    inputBirthday = document.getElementById('birth').value;
    
    if(inputName==null || inputName==""){
        alert('Por favor preencha o campo nome');
        document.getElementById('name').focus();
        return false;     
    }
    if(inputEmail==null || inputEmail==""){
        alert('Por favor preencha o campo nome');
        document.getElementById('Email').focus();
        return false;     
    }
    if(inputEmail==null || inputEmail==""){
        alert('Por favor preencha o campo nome');
        document.getElementById('email').focus();
        return false;     
    }
}