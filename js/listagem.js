// var arr = [];

// arr = {nome:"heroldi", nick:"nick1", age:"20"};


// // var a = JSON.parse(arr);

// var a = localStorage.getItem('dado')
// console.log(a);


var a = "nome1";
var b = "nick1";
var c = 20;

var tableTr = document.querySelector(".dataTr");

var nametd = document.createElement("td");
var nicktd = document.createElement("td");
var agetd = document.createElement("td");
var optiontd = document.createElement("td");

nametd.textContent = a;
nicktd.textContent = b;
agetd.textContent = c;
optiontd.textContent = "more";

tableTr.appendChild(nametd);
tableTr.appendChild(nicktd);
tableTr.appendChild(agetd);
tableTr.appendChild(optiontd);


nametd.classList.add("bodyTable");
nicktd.classList.add("bodyTable");
agetd.classList.add("bodyTable");
optiontd.setAttribute("class", "optionRef");
optiontd.classList.add("bodyTable");


function iniciaModal(modalID) {
    const modal = document.getElementById(modalID);
    if(modal) {
        modal.classList.add('mostrar');
        modal.addEventListener('click', (e) => {
            if(e.target.id == modalID || e.target.className == 'fecharModal') {
                modal.classList.remove('mostrar');
             }
        });
    }
}

const logo = document.querySelector('.optionRef');
logo.addEventListener('click', () => iniciaModal('modalIdent'));

document.addEventListener('scroll', () => {
    if(window.pageYOffset > 800) {
        iniciaModal('modalIdent')
    }
})




