// const $input = document.querySelector('.inp-phone')
// $input.addEventListener('input', handleInput, false)

// function handleInput (e) {
//   e.target.value = phoneMask(e.target.value)
// }


function phoneMask () {
  phoneNum = document.querySelector('.inp-phone').value ;
  phoneReg = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if (phone.value.match(phoneReg)){
    return true;
  }else{
    alert('Phone error')
    return false
  }

  // phone.replace(/\D/g, '')
  //   .replace(/^(\d)/, '($1')
  //   .replace(/^(\(\d{2})(\d)/, '$1) $2')
  //   .replace(/(\d{4})(\d{1,5})/, '$1-$2')
  //   .replace(/(-\d{5})\d+?$/, '$1');
}