const which = document.getElementById("which");
const key = document.getElementById("key");
const whichSmall = document.getElementById("which-small");
const keyCode = document.getElementsByTagName("keyCode");

document.addEventListener("keypress", (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.charCode);
    console.log(e.key);
    console.log(e.code);
  
    which.innerHTML = `<p>${e.charCode}</p>`;
    key.innerHTML = `<p>${e.key}</p>`;
    whichSmall.innerHTML = `<p>${e.charCode}</p>`;
    keyCode.innerHTML = `<p>${e.keyCode}</p>`;
    
})