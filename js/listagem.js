var user1 = [1,2,3,4,5,6,7,8,9,null,2,null,null,14,15,16];

localStorage.setItem("user",JSON.stringify(user1));


var labelData = document.querySelector(".showContainer");
var localStorageData = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var labelInput = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
var labelInputContent = ["Name: ", "Nickname: ", "Email", "Phone", "Birthday", "Age", "Linkdin", "Github", "1º Certificate", "2º Certificate", "3º Certificate", "4º Certificate", "5º Certificate","Team Name", "Institution", "Graduation"]

var data = JSON.parse(localStorage.getItem('user'));

for(let x = 0; x<localStorageData.length; x++){
    localStorageData[x] = data[x];
}


var campLabel = [1];
campLabel.length = localStorageData.length;
var border = document.createElement("div");
border.setAttribute("class", "boderInput")

for(let i=0; i<labelInput.length;i++){
    if(localStorageData[i] != null){
        labelInput[i] = document.createElement("label");
        campLabel[i] = document.createElement("label");      

        labelInput[i].textContent = labelInputContent[i];
        campLabel[i].textContent = localStorageData[i];

        labelData.appendChild(border);
        border.appendChild(labelInput[i]);
        labelData.appendChild(border);
        border.appendChild(campLabel[i]);  

        labelInput[i].classList.add("labelInput");
        campLabel[i].classList.add("label");      

    }else{  

    }
};



