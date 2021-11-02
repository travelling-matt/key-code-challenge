const which = document.getElementById("which");
const key = document.getElementById("key");
const whichSmall = document.getElementById("which-small");
const code = document.getElementById("code");

document.addEventListener("keypress", (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.charCode);
    console.log(e.key);
    console.log(e.code);
  
    which.innerHTML = `<p>${e.charCode}</p>`;
    key.innerHTML = `<p>${e.key}</p>`;
    whichSmall.innerHTML = `<p>${e.charCode}</p>`;
    code.innerHTML = `<p>${e.code}</p>`;
})