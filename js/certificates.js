let DOMButtonFinish = document.getElementById("finishButton");
var DOMcertificates = document.querySelectorAll(".cert");
var qtCert = 0;
var num = []

// Adiciona div de certificado
function addDiv() {
    let DOMCertContainer = document.getElementById("certificates-conteiner");
    // let DOMcertificates = document.querySelectorAll(".cert");
    // console.log(DOMcertificates);
    event.preventDefault();
    if (qtCert < 5) {
        let div = document.createElement("div");
        div.classList.add("cert");
        div.style.cssText = "order: 2";
        div.setAttribute("onchange", "alterado(event);");
        div.setAttribute("id", num[0])
        num.shift();
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

// Função para remover uma div de input de certificado
function deleteDiv(event) {
    let div = event.target.parentElement;
    deleteStorage(div);
    div.remove();
    qtCert--;
    num.unshift(div.id);
};

// Função que remove um dado do localStorage 
function deleteStorage(element) {
    let id = element.id;
    let className = element.className;
    if (className == "cert") {
        localStorage.removeItem("Certificate" + id);
    } else {
        localStorage.removeItem(className);
    }

}

// Função que vai alternar entre os estados de favorito
function fav(event) {
    let div = event.target.parentElement;
    let inputValue = div.querySelector("#certificate").value;
    let imageValue = div.querySelector(".heart").getAttribute("src");
    // Verifica se o input tem algum dado
    if (inputValue) { // Se houver algum dado
        if (imageValue == "img/heart-0.svg") { // Se não for favoritado
            favorite(event.target.parentElement);
            var certificado = {
                'Certificate': inputValue,
                'Favorite': true,
                'ID': div.id
            }
            // Salva o elemento no localStorage
            localStorage.setItem("Certificate" + div.id, JSON.stringify(certificado));
        } else { // Se for favoritado
            unFavorite(event.target.parentElement);
            var certificado = {
                'Certificate': inputValue,
                'Favorite': false,
                'ID': div.id
            }
            // Salva o elemento no localStorage
            localStorage.setItem("Certificate" + div.id, JSON.stringify(certificado));
        }
    } else { // Se não houver algum dado
        alert("Enter a certificate to be able to bookmark it!")
    }

}

// Função para favoritar o elemento
function favorite(element) {
    let imagem = element.querySelector(".heart");
    imagem.setAttribute("src", "img/heart.svg");
    element.style.cssText = "order: -1; transition: 1s ease";
}

// Função para remover o favorito do elemento
function unFavorite(element) {
    let imagem = element.querySelector(".heart");
    imagem.setAttribute("src", "img/heart-0.svg");
    element.style.cssText = "order: 0; transition: 1s ease";
}

// Função que verifica se algo foi digitado no formulário
function alterado(event) {
    let div = event.target.parentElement;
    let classe = div.className;

    // Verifica se é uma div de Cerificate
    if (classe == "cert") { // Caso seja um certificate
        let inputValue = div.querySelector("#certificate").value;
        let imageValue = div.querySelector(".heart").getAttribute("src");
        // Verifica se o input tem algum dado
        if (inputValue) { // Se houver algum dado
            if (imageValue == "img/heart-0.svg") { // Se não for favoritado
                var certificado = {
                    'Certificate': inputValue,
                    'Favorite': false,
                    'ID': div.id
                }
                localStorage.setItem("Certificate" + div.id, JSON.stringify(certificado));
            } else {  // Se for favoritado
                var certificado = {
                    'Certificate': inputValue,
                    'Favorite': true,
                    'ID': div.id
                }
                localStorage.setItem("Certificate" + div.id, JSON.stringify(certificado));
            }
        } else { // Se não houver algum dado
            unFavorite(div);
            deleteStorage(div);
        }

    } else { // Caso seja  uma div de: team-name - instituition - graduation
        let inputValue = div.querySelector(".inputText").value;
        if (inputValue) { // Se houver algum valor no input
            localStorage.setItem(classe, JSON.stringify(inputValue));
        } else { // Se não houver algum valor no input
            deleteStorage(div);
        }
    }

}

// Função para carregar os dados já existentes no localStorage
function carregar() {
    var conteudo = document.getElementById("content");
    console.log(conteudo)
    var DOMCertContainer = document.getElementById("certificates-conteiner")
    console.log(DOMCertContainer)
    // Repetição para verificar se ja existem certificados salvos no localStorage
    for (let i = 1; i <= 5; i++) {
        let cert = JSON.parse(localStorage.getItem("Certificate" + i));
        // Verifica se o certificado existe
        if (cert) { // Se o certificado existir
            if (cert.Favorite == true) { // Se for um certificado favoritado
                let div = document.createElement("div");
                div.classList.add("cert");
                div.style.cssText = "order: -1";
                div.setAttribute("onchange", "alterado(event);");
                div.setAttribute("id", cert.ID)
                div.innerHTML = `
                    <input type="text" name="certificate" id="certificate" placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/" value="${cert.Certificate}">
                    <img src="img/garbage.svg" alt="" class="garbage" onclick="deleteDiv(event);">
                    <img src="img/heart.svg" alt="" class="heart" onclick="fav(event);">
                    `;
                
                DOMCertContainer.appendChild(div);
                qtCert++;
            } else { // Se não for um certificado favoritado
                let div = document.createElement("div");
                div.classList.add("cert");
                div.style.cssText = "order: 0";
                div.setAttribute("onchange", "alterado(event);");
                div.setAttribute("id", cert.ID)
                div.innerHTML = `
                    <input type="text" name="certificate" id="certificate" placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/" value="${cert.Certificate}">
                    <img src="img/garbage.svg" alt="" class="garbage" onclick="deleteDiv(event);">
                    <img src="img/heart-0.svg" alt="" class="heart" onclick="fav(event);">
                    `;
                DOMCertContainer.appendChild(div);
                qtCert++;
            }
        } else { // Se o certificado não existir
            num.push(i);
        }
    }
    if (qtCert == 0) { // Se não houver nenhum certificado no localStorage
        let DOMCertContainer = document.getElementById("certificates-conteiner");
        let div = document.createElement("div");
        div.classList.add("cert");
        div.style.cssText = "order: 0";
        div.setAttribute("onchange", "alterado(event);");
        div.setAttribute("id", 1)
        div.innerHTML = `
                <input type="text" name="certificate" id="certificate" placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/">
                <img src="img/garbage.svg" alt="" class="garbage" onclick="deleteDiv(event);">
                <img src="img/heart-0.svg" alt="" class="heart" onclick="fav(event);">
                `;
        DOMCertContainer.appendChild(div);
        qtCert++;
    }

    let team = JSON.parse(localStorage.getItem("team-conteiner"));
    let instituition = JSON.parse(localStorage.getItem("instituition-conteiner"));
    let graduation = JSON.parse(localStorage.getItem("graduation-conteiner"));
    if(team){
        let inputTeam = document.getElementById("team-name");
        inputTeam.setAttribute("value", team)
    }
    if(instituition){
        let inputInstituition = document.getElementById("instituition");
        inputInstituition.setAttribute("value", instituition)
    }
    if(graduation){
        let inputGraduation = document.getElementById("graduation");
        inputGraduation.setAttribute("value", graduation)
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