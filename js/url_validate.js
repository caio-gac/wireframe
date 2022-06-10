function ValidateUrl() {
  let gitReg = /(?:git|ssh|https?|git@[-\w.]+):(\/\/)?(.*?)(\.git)(\/?|\#[-\d\w._]+?)$/
  let LinReg = /((https?:\/\/)?((www|\w\w)\.)?linkedin\.com\/)((([\w]{2,3})?)|([^\/]+\/(([\w|\d-&#?=])+\/?){1,}))$/
    let urlGit = document.querySelector('.inp-git');
    let urlLink = document.querySelector('.inp-link');
    if (urlGit.value.match(gitReg) || urlLink.value.match(LinReg)) {
      alert('url certo')
    }else{
       alert('url errada')
    }

    

    
}