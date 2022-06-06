
function DataDay(){
    let day = [];
    for (let i = 1; i < 31; i++) {
        day.push(i);

}
const select = document.querySelector('#day');

day.forEach((value) => {  option =new Option(value, value); 
     select.options[select.options.length] = option;});
} 



function DataMonth(){
    let month = [];
    for (let i = 1; i < 13; i++) {
        month.push(i);

}
const select = document.querySelector('#month');

month.forEach((value) => {  option =new Option(value, value); 
     select.options[select.options.length] = option;});
} 



function DataYear(){
    let year = [];
    for (let i = 1990; i < 2023; i++) {
        year.push(i);

}
const select = document.querySelector('#year');

year.forEach((value) => {  option =new Option(value, value); 
     select.options[select.options.length] = option;});
} 
