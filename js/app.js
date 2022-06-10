let conteudo = document.getElementById("content")

function carregarBasic(){
  conteudo.innerHTML = `
  <div class="form" id="1" onload="getTemp()">
    <div class="full-name">
        <label for="">Full Name*</label>
        <input id="inp-name" class="inp-name" type="text" required placeholder="Foo Bar" onfocusout="teste()">
    </div>
    <div class="nickname">
        <label for="">Nickname</label>
        <input id="inp-nickname" class="inp-nickname" type="text" placeholder="Juanito" onfocusout="teste()">
    </div>
    <div class="group-email">
        <div class="email">
            <label for="">Email*</label>
            <input id="inp-email" class="inp-email" type="email" placeholder="foo@bar.com" required oninput="ValidateEmail()" onfocusout="teste();">
        </div>
        <div class="phone">
            <label for="">Phone</label>
            <input id="inp-phone" type="text" placeholder="(83) 0000-0000" name="" class="inp-phone" oninput="phoneMask()">
        </div>
    </div>  

    <div class="birthday">
        <div class="text">
            <label for="">Birthday*</label>
        </div>
        <div class="group-date">
            <div class="day-month">
            <div class="date">
                <label for="">Day</label>
                <select  name="day" id="day" class="inp-day" onfocus="DataDay()" onfocusout="teste();ageCalculate()"></select>
            </div>
            <div class="date">
                <label for="">Month</label>
                <select  name="month" class="inp-month" id="month" onfocus="DataMonth()" onfocusout="teste();ageCalculate()"></select>
            </div>
            </div>
            <div class="year-age">
            <div class="date">
                <label for="">Year</label>
                <select name="year" id="year" class="inp-year" onfocus="DataYear()" onfocusout="teste();ageCalculate()"></select>
            </div>
            <div class="date">
                <label for="">Age</label>
                <div>
                    <input type="text" id="inp-age" class="ageIndex" readonly>
                </div>
            </div>
        </div>
    </div>
            
    <div class="checkbox">
        <input id="inp-checkbox" type="checkbox" onfocusout="teste()" checked> I accept the terms and privacy</input>
    </div>   
    <div class="btn">
        <button  class="button" onclick="changePage('_social', 'content')"> Next  <img src="../img/next.png"></button>
    </div> 
        
        <script src="/js/function.js"></script>
        <script src="/js/storage.js"></script>
        <script src="/js/age.js"></script>
        <script src="/js/email_validate.js"></script>
        <script src="/js/phone_validate.js"></script>
    
  </div>
  `
}

function carregarSocial(){
  conteudo.innerHTML = `
  <div class="form" id="2">
    <div class="group-linkedin">
        <div class="linkgit">
            <label for="">Linkedin</label>
            <input type="text" name="" id="inp-linkgit" class="inp-git" onfocusout="ValidateUrl()" placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/" >
        </div>
    </div>
    <div class="group-github">
        <div class="linkgit">
            <label for="">Github*</label>
            <input type="text" name="" id="inp-linkgit" class="inp-link" onfocusout="ValidateUrl()" placeholder="https://github.com/foobar" required>
        </div>
    </div>
    <div class="btn1">
        <button class="button1" onclick="changePage('_certificate', 'content')"> Next  <img src="../img/next.png"></button>
    </div>
    <script src="/js/url_validate.js"></script>
  </div>
  `
}

function carregarCert(){
  conteudo.innerHTML = `
  <div class="certificates" id="3">

      <form action="" class="form-certificates">
          <label for="certificate" onclick="carregar();">Certificates</label>
          <div class="certificates-conteiner"  id="certificates-conteiner">
              
          </div>
          <button id="moreButton" onclick="addDiv();"><img src="img/more.svg" alt="">  More  <img src="img/next.svg" alt=""></button>
          </br>
          <div class="conteiner">
              <div class="team-conteiner" onchange="alterado(event);">
                  <label for="team-name">Team Name <span class="span-team-name">*</span></label>
                  <input type="text" name="team-name" id="team-name" placeholder="https://www.linkedin.com/in/foo-bar-3a0560104/" class="inputText">
              </div>
              <div class="instituition-conteiner" onchange="alterado(event);">
                  <label for="instituition">Instituition <span class="span-instuition">*</span></label>
                  <input type="text" name="instituition" id="instituition" placeholder="Universidade Federal da Paraíba" class="inputText">
              </div>
              <div class="graduation-conteiner" onchange="alterado(event);">
                  <label for="graduation">Graduation <span class="span-graduation">*</span></label>
                  <input type="text" name="graduation" id="graduation" placeholder="Ciências da Computação" class="inputText">
              </div>
          </div>
          <div class="button-conteiner">
              <button type="submit" id="finishButton"><img src="img/verified.svg" alt="">  Finish  </button>
          </div>
      </form>
      <script src="js/certificates.js"></script>
  </div>
  `
}