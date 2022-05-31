
function changePage(pageNumber, pageName) {
  var indice = pageNumber;
  var target = pageName;
  var url = './../Telas/tela'+indice+'.html'

  var xml = new XMLHttpRequest()

  xml.onreadystatechange = function(){
    if(xml.readyState == 4 && xml.status == 200){
      document.getElementById(target).innerHTML = xml.responseText;
    }
  }

  xml.open("GET", url, true)

  xml.send()
}
  
ageCalculate();

ValidateEmail();

