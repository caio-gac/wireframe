function ageCalculate(){
    let yearInput = document.querySelector('.inp-year');
    let monthInput = document.querySelector('.inp-month');
    let dayInput = document.querySelector('.inp-day');
    let today = new Date()
    let yearDiff = today.getFullYear() - yearInput.value;
    // console.log(yearDiff)
    let monthDiff = (today.getMonth()) - parseInt(monthInput.value);
    // console.log('mes de hoje '+(today.getMonth()))
    // console.log(monthDiff);
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dayInput)) {
        yearDiff--
    }
    console.log('idade - ' + yearDiff)
    document.getElementById('inp-age').value = yearDiff;
    // let dateToday = new Date(yearInput.value,dayInput.value,(monthInput.value));
    // let monthDiff = new Date.getTime() - dateToday;
    // let dateNow = new Date()
    // console.log(dateNow.getTime())
    // console.log(dateToday)
    // console.log(monthDiff)
    // let ageToDate = new Date(monthDiff);    
    // let year = ageToDate.getUTCFullYear();
    // let age = Math.abs(year - 1970);
    // console.log(age)
    // return document.getElementById('ageIndex').innerHTML = age;
}
