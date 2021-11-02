const which = document.getElementById("which");
const key = document.getElementById("key");
const whichSmall = document.getElementById("which-small");
const code = document.getElementById("code");
const wrapper = document.getElementById("wrapper")
//const location = document.getElementById("location");
const welcome = document.getElementById("welcome")

document.addEventListener("keypress", (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.charCode);
    console.log(e.key);
    console.log(e.code);
    //console.log(e.location);
  
    which.innerHTML = `<p>${e.charCode}</p>`;
    key.innerHTML = `<p>${e.key}</p>`;
    whichSmall.innerHTML = `<p>${e.charCode}</p>`;
    code.innerHTML = `<p>${e.code}</p>`;
    welcome.innerHTML =`<h1></h1>`;

    //location.innerHTML = `<p>${e.location}</p>`;

})