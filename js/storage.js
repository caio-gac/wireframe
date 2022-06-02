let input1 = document.querySelector('#1'); 

function store(item_ids) {
    let input1Value = input1.value;
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
