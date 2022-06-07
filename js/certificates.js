let DOMButtonFinish = document.getElementById("finishButton");
var DOMcertificates = document.querySelectorAll(".cert");
let DOMHeart = document.querySelectorAll(".heart");
let qtCert = 1;

// Adiciona div de certificado
function addDiv() {
    let DOMCertContainer = document.getElementById("certificates-conteiner");
    event.preventDefault();
    if (qtCert < 5) {
        let div = document.createElement("div");
        div.classList.add("cert");
        div.style.cssText = "order: 2";
        div.innerHTML = `
                        <input type="text" name="certificate" id="certificate" placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/">
                        <img src="img/garbage.svg" alt="" class="garbage" onclick="deleteDiv(event);">
                        <img src="img/heart-0.svg" alt="" class="heart" onclick="fav(event);">
        `;
        DOMCertContainer.appendChild(div);
        qtCert++;
    } else {
        alert("Maximum number of certificates reached...");
    }
}

// Delete
function deleteDiv(event) {
    event.target.parentElement.remove();
    qtCert--;
};

// Favorites
function fav(event) {
    if (event.target.getAttribute("src") == "img/heart-0.svg") {
        event.target.setAttribute("src", "img/heart.svg");
        event.target.parentElement.style.cssText = "order: -1; transition: 1s ease";
        return;
    } else {
        event.target.setAttribute("src", "img/heart-0.svg");
        event.target.parentElement.style.cssText = "order: 1; transition: 1s ease";
        return;
    }
}


// DOMButtonFinish.addEventListener("click", function () {
//     event.preventDefault();
//     let certs = document.querySelectorAll("#certificate");
//     let team = document.getElementById("team-name").value;
//     let instituition = document.getElementById("instituition").value;
//     let graduation = document.getElementById("graduation").value;
//     let certificates = [];
//     let formCertificates = [];
//     console.log(certs.value);
//     for (i = 0; i < 5; i++) {
//         if (certs[i].value != "")
//             certificates.unshift(certs[i].value)
//     }
//     if (team == "" || instituition == "" || graduation == "") {
//         alert("Make sure all necessary data has been included!")
//     } else {
//         formCertificates.push(certificates);
//         formCertificates.push(team);
//         formCertificates.push(instituition);
//         formCertificates.push(graduation);
//     }

//     console.log(formCertificates);

// });