function ValidateEmail() {

    let emailReg = /\S+@\S+\.\S+/;
    let emailVal = document.querySelector('.inp-email');

    if (emailVal.value.match(emailReg)) {
      console.log('deu boa')
    }else{
      
      console.log('deu ruim')
    }
  
  }