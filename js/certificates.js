let DOMButtonMore = document.getElementById("moreButton");
let DOMButtonFinish = document.getElementById("finishButton");
var DOMcertificates = document.querySelectorAll(".cert");
let DOMCertContainer = document.getElementById("certificates-conteiner");
let DOMHeart = document.querySelectorAll(".heart");
let Cert = [];

DOMcertificates.forEach(function(item){
    Cert.push(item);
});

// Adiciona div de certificado
DOMButtonMore.addEventListener("click", function () {
    event.preventDefault();
    if (Cert.length < 5) {
        let div = document.createElement("div");
        div.classList.add("cert");
        div.innerHTML = `
                        <input type="text" name="certificate" id="certificate" placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/">
                        <span class="priority">FALSE</span>
                        <img src="img/heart-0.svg" alt="" class="heart">
        `;
        DOMCertContainer.appendChild(div);
        Cert.push(div);
    } else {
        alert("Maximum number of certificates reached...");
    }
    
});


// Delete
DOMcertificates.forEach(
    function (item) {
        // delete
        item.addEventListener("dblclick", function () {
            // console.log(DOMCertContainer);
            this.remove();
        });
    });

// Favorites
DOMcertificates.forEach(
    function (item) {
        let priority = item.querySelector(".priority");
        let heart = item.querySelector(".heart");

        heart.addEventListener("click", function () {
            if (priority.textContent == "FALSE") {
                this.src = "../img/heart.svg"
                priority.textContent = "TRUE";
            } else {
                this.src = "../img/heart-0.svg"
                priority.textContent = "FALSE";
            }
        });
    });

DOMButtonFinish.addEventListener("click", function () {
    event.preventDefault();
    let certs = document.querySelectorAll("#certificate");
    let team = document.getElementById("team-name").value;
    let instituition = document.getElementById("instituition").value;
    let graduation = document.getElementById("graduation").value;
    let certificates = [];
    let formCertificates = [];
    console.log(certs.value);
    for (i = 0; i < 5; i++){
        if (certs[i].value != "")
        certificates.unshift(certs[i].value)
    }
    if (team == "" || instituition == "" || graduation == ""){
        alert("Make sure all necessary data has been included!")
    }else {
        formCertificates.push(certificates);
        formCertificates.push(team);
        formCertificates.push(instituition);
        formCertificates.push(graduation);
    }
    
    console.log(formCertificates);

});
