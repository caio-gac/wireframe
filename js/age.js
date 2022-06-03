function ageCalculate(){
    var yearInput;
    var monthInput;
    var dayInput;
    var input = yearInput +" / "+monthInput+" / "+dayInput;
    var dateToday = new Date(input);
    var monthDiff = Date.now() - dateToday.getTime();
    var ageToDate = new Date(monthDiff);    
    var year = ageToDate.getUTCFullYear();
    var age = Math.abs(year - 1970);
    return document.getElementById('ageIndex').innerHTML = age;
}
