function ageCalculate(){
    let yearInput = document.getElementById('inp-year');
    let monthInput = document.getElementById('inp-month');;
    let dayInput = document.getElementById('inp-day');;
    let input = yearInput +" / "+monthInput+" / "+dayInput;
    let dateToday = new Date(input);
    let monthDiff = Date.now() - dateToday.getTime();
    let ageToDate = new Date(monthDiff);    
    let year = ageToDate.getUTCFullYear();
    let age = Math.abs(year - 1970);
    console.log(age)
    return document.getElementById('ageIndex').innerHTML = age;
}
