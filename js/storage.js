function teste(){
    
    let nameTemp = document.querySelector('.inp-name');
    let nickTemp = document.querySelector('.inp-nickname');
    let emailTemp = document.querySelector('.inp-email');
    let phoneTemp = document.querySelector('.inp-phone');
    let dayTemp = document.querySelector('.inp-day');
    let monthTemp = document.querySelector('.inp-month');
    let yearTemp = document.querySelector('.inp-year');
    let checkTemp = document.querySelector('.inp-check');

    localStorage.setItem('name', nameTemp.value)
    localStorage.setItem('nickname', nickTemp.value)
    localStorage.setItem('email', emailTemp.value)
    localStorage.setItem('phone', phoneTemp.value)
    localStorage.setItem('day', dayTemp.value)
    localStorage.setItem('month', monthTemp.value)
    localStorage.setItem('year', yearTemp.value)
    localStorage.setItem('check', checkTemp)
    // localStorage.setItem('name', listTemp)
    // document.querySelector('.inp-name') = localStorage.getItem('name')
}

// function teste1(){
//     let input4 = document.querySelector('.inp-name').value;
//     let input2 = document.querySelector('.inp-name').value;
//     let input3 = document.querySelector('.inp-name').value;
//     console.log(input1.value)
//     localStorage.setItem('name', input1)
//     localStorage.getItem('name')
// }
// function teste2(){
//     let input1 = document.querySelector('.inp-name').value;
//     let input2 = document.querySelector('.inp-name').value;
//     console.log(input1.value)
//     localStorage.setItem('name', input1)
//     localStorage.getItem('name')
// }

function tempSocial(){
    let gitTemp = document.querySelector('.inp-git');
    let linkTemp = document.querySelector('.inp-link');

    localStorage.setItem('git', gitTemp.value)
    localStorage.setItem('linkedin', linkTemp.value)
}

// function getTemp(){
//     name1 =  localStorage.getItem('name');
//     console.log(name1)
//     document.querySelector('.inp-name').value = name1 ;
// }



// let nameTemp = document.querySelector('.inp-name');
// let name1 =  localStorage.getItem('name');
// console.log(nameTemp.value)
// if (name1) {
//     console.log(name1)
// }
// var name1 =  localStorage.getItem('name');
// console.log(name1);
// window.addEventListener('load', function() {
    
//     console.log(name1);
//     document.querySelector('.inp-name').value = name1;
//     })

// console.log(name1)

// document.getElementsByClassName('inp-name').value = localStorage.getItem('name')
// let nameValue = document.querySelector('.inp-name')
// console.log(nameValue.value)

function teste1() {
    const name1 =  localStorage.getItem('name');
    // console.log(name1,'text')

    const inputName = document.getElementById('testeName')
    inputName.value = name1

        // if (name1 !== '') {
        // // console.log(nameValue.value)
        // console.log(name1)
        // console.log(document.getElementById('inp-name').value)
        
    // }
    // document.getElementById('inputName').value = name1;
    
}
// document.querySelector('.inp-name').value = 
teste1()

// function teste1(){
//     let nameTemp = document.querySelector('.inp-name')
//     let name1 = localStorage.getItem('name')
//     let name2 = ''
//     if (name1 !== '') {
//         console.log(name1)
//     }
// }

// console.log(window.location.href)

// function tempLocal(temp_ids){
//     let input1Value = input1.value;
//     let input2Value = input2.value;
//     let input3Value = input3.value;
//     var tempItems = [];
//     localStorage.setItem('temp1', input)
//     localStorage.setItem('temp2', input)
//     localStorage.setItem('temp3', input)
//     for (let l = 0; l < temp_id.length; l++) {
//         tempItems.push(`input${i}Value`);
//     }
//     if (items !== []) {
//         localStorage.getItem('temp_ids');
//     }
//     localStorage.setItem("item", JSON.stringify(tempItems));
    
// }