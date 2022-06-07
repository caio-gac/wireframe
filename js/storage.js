function teste(){
    let listTemp = [];
    let input1 = document.querySelector('.inp-name').value;
    let input2 = document.querySelector('.inp-nickname').value;
    let input3 = document.querySelector('.inp-email').value;
    let input4 = document.querySelector('.inp-phone').value;
    let input5 = document.querySelector('.inp-day').value;
    let input6 = document.querySelector('.inp-month').value;
    let input7 = document.querySelector('.inp-year').value;
    let input8 = document.querySelector('.inp-check');
    // console.log(input1)
    listTemp = ['name = '+ input1+ " " +
    "nick name = " +input2+ " " +
    "email = " +input3+ " " +
    "phone = " +input4+ " " +
    "day = " +input5+ " " +
    "month = " +input6+ " " +
    "year = " +input7+ " " +
    "checkbox = " +input8
]
    localStorage.setItem('name', listTemp)
    localStorage.getItem('name')
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


function getTemp(){
    document.getElementById('name').value = localStorage.getItem('name')
}


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