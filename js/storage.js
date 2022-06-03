let input1 = document.querySelectorAll('#1'); 
let input2 = document.querySelector('#2'); 
let input3 = document.querySelector('#3'); 


function store(item_ids) {
    let input1Value = input1.value;
    let input2Value = input2.value;
    let input3Value = input3.value;
    var items = [];
    localStorage.setItem('ids', items);
    for(var i = 0; i < item_ids.length; i++) {
        items.push(`input${i}Value`);
    }
    if (items !== []) {
        localStorage.getItem('ids');
    }
    localStorage.setItem("item", JSON.stringify(items));
}

function tempLocal(temp_ids){
    let input1Value = input1.value;
    let input2Value = input2.value;
    let input3Value = input3.value;
    var tempItems = [];
    localStorage.setItem('temp1', input)
    localStorage.setItem('temp2', input)
    localStorage.setItem('temp3', input)
    for (let l = 0; l < temp_id.length; l++) {
        tempItems.push(`input${i}Value`);
    }
    if (items !== []) {
        localStorage.getItem('temp_ids');
    }
    localStorage.setItem("item", JSON.stringify(tempItems));
    
}