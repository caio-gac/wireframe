// começo setar dados no localStorage manualmente
var user1 = ["Pedro joão alvares silva","PedroJoão","pedroJoão@email.com","4999999999","07/09/2005","30","pedroJoão",null,"TI",null,"farmacia",null,null,"flamengo","UNC","medicina"];

localStorage.setItem("user",JSON.stringify(user1));

// fim setar dados no localStorage manualmente

// começo buscar dados no dom
var labelData = document.querySelector(".showContainer");
// fim buscar dados no dom

// começo setar manualmente tamanho e conteudo dos arrys (Não alterar o array labelInputContent)
var localStorageData = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var labelInput = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var labelInputContent = ["Name: ", "Nickname: ", "Email: ", "Phone: ", "Birthday: ", "Age: ", "Linkdin: ", "Github: ", "Certificate: ", "Certificate: ", "Certificate: ", "Certificate: ", "Certificate: ","Team Name: ", "Institution: ", "Graduation: "]
// fim setar manualmente tamanho e conteudo dos arrys (Não alterar o array labelInputContent)

// começo pegando dados dos local storage
var data = JSON.parse(localStorage.getItem('user'));
// fim pegando dados dos local storage

// começo passando dados da váriavel de localStorage para array que irá mostrar na tela
for(let x = 0; x<localStorageData.length; x++){
    localStorageData[x] = data[x];
}
// fim passando dados da váriavel de localStorage para array que irá mostrar na tela

// Começo criação array que mantem labels
var campLabel = [];
// Fim criação array que mantem labels

// Começo variavel e classe para colocar borda no top de todo usuário.
var border = document.createElement("div");
border.setAttribute("class", "boderInput")
// fim variavel e classe para colocar borda no top de todo usuário.

// começo for para mostrar os dados e labes na tela
for(let i=0; i<labelInput.length;i++){
    // começo if para ver se cada indice tem conteudo
    if(localStorageData[i] != null){
        // começo criação de labels para mostrar titulo e informação
        labelInput[i] = document.createElement("label");
        campLabel[i] = document.createElement("label");      
        // fim criação de labels para mostrar titulo e informação
        
        // começo para adicionar o conteudo aos labels de titulo e informações
        labelInput[i].textContent = labelInputContent[i];
        campLabel[i].textContent = localStorageData[i];
        // fim para adicionar o conteudo aos labels de titulo e informações

        // começo para vincular váriaveis aos labels
        labelData.appendChild(border);
        border.appendChild(labelInput[i]);
        labelData.appendChild(border);
        border.appendChild(campLabel[i]);  
        // fim para vincular váriaveis aos labels

        // começo para vincular classes aos labels
        labelInput[i].classList.add("labelInput");
        campLabel[i].classList.add("label");      
        // fim para vincular classes aos labels

    }else{  

    }
    // fim if para ver se cada indice tem conteudo
};
// fim for para mostrar os dados e labes na tela



