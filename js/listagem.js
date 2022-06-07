// começo setar dados no localStorage manualmente
var user1 = {
    "Name": "Joao",
     "Nickname" : "joao20", 
     "Email" : "joao@gmail", 
     "Phone" : "123456789", 
     "Birthday" : "10/10/2010", 
     "Age" : "12", 
     "Linkdin" : "joaoLink", 
     "Certificate1" : {
         "certificate" : "TI",
         "fav" : false,
    }, 
    "Certificate2" : {
        "certificate" : "Farmácia",
        "fav" : true,
   }, 
     "Team Name" : "Flamengo", 
     "Institution" : "UNC", 
     "Graduation" : "Eng Soft"
}

localStorage.setItem("user",JSON.stringify(user1));

var labelData = document.querySelector(".showContainer");

var localStorageData = [];

var data = JSON.parse(localStorage.getItem('user'));

localStorageData = Object.entries(data);

var border = document.createElement("div");
border.setAttribute("class", "boderInput")

console.log(localStorageData)

localStorageData.forEach(data => {
    if(data != null){
    
        var pContainer = document.createElement("div");

        if(data[0] === "Certificate1" || data[0] === "Certificate2" || data[0] === "Certificate3" || data[0] === "Certificate4" || data[0] === "Certificate5"){
            if(data[1].fav === true){

                pContainer.innerHTML = `
                    <p class="labelInput">Certificate: ${(data[1].certificate)} <br> Favorite: Yes </p>
                `
            }else{
                pContainer.innerHTML = `
                    <p class="labelInput">Certificate: ${(data[1].certificate)} <br> Favorite: No </p>
                `
            }
        }else{
            pContainer.innerHTML = `
                    <p class="labelInput">${data[0]}: ${data[1]}</p>
                `     
        }     
    }else{  
        
    }
    labelData.appendChild(border);
    border.appendChild(pContainer);
});


    
  




