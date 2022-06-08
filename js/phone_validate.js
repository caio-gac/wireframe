// const $input = document.querySelector('.inp-phone')
// $input.addEventListener('input', handleInput, false)

// function handleInput (e) {
//   e.target.value = phoneMask(e.target.value)
// }


function phoneMask () {
  let phoneNum = document.querySelector('.inp-phone') ;
  let phoneReg = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  // console.log(phoneNum.value.replace(/\D/g, '')
  // .replace(/^(\d)/, '($1')
  // .replace(/^(\(\d{2})(\d)/, '$1) $2')
  // .replace(/(\d{4})(\d{1,5})/, '$1-$2')
  // .replace(/(-\d{5})\d+?$/, '$1'))
  // if (phoneNum.value.match(phoneReg)){
  
  document.querySelector('.inp-phone').value = phoneNum.value.replace(/\D/g, '')
  .replace(/^(\d)/, '($1')
  .replace(/^(\(\d{2})(\d)/, '$1) $2')
  .replace(/(\d{4})(\d{1,5})/, '$1-$2')
  .replace(/(-\d{5})\d+?$/, '$1');

    // document.getElementById("inp-phone").setAttribute('value', phoneNum.value.replace(/\D/g, '')
    // .replace(/^(\d)/, '($1')
    // .replace(/^(\(\d{2})(\d)/, '$1) $2')
    // .replace(/(\d{4})(\d{1,5})/, '$1-$2')
    // .replace(/(-\d{5})\d+?$/, '$1'));

    // return phoneNum.value.replace(/\D/g, '')
    // .replace(/^(\d)/, '($1')
    // .replace(/^(\(\d{2})(\d)/, '$1) $2')
    // .replace(/(\d{4})(\d{1,5})/, '$1-$2')
    // .replace(/(-\d{5})\d+?$/, '$1');

  // }else{
  //   alert('Phone error')
  //   return false
  // }

  // phoneNum.replace(/\D/g, '')
  //   .replace(/^(\d)/, '($1')
  //   .replace(/^(\(\d{2})(\d)/, '$1) $2')
  //   .replace(/(\d{4})(\d{1,5})/, '$1-$2')
  //   .replace(/(-\d{5})\d+?$/, '$1');
}