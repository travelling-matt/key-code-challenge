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



//     //let element = document.getElementById("which");
//     //element.removeChild(paraWhich); 
//     let paraWhich = document.createElement("p");
//     let nodeWhich = document.createTextNode(e.charCode);
//     paraWhich.appendChild(nodeWhich);
//     let elementWhich = document.getElementById("which");
//     elementWhich.appendChild(paraWhich);
//     let paraKey = document.createElement("p");
//     let nodeKey = document.createTextNode(e.key);
//     paraKey.appendChild(nodeKey);
//     let elementKey = document.getElementById("key");
//     elementKey.appendChild(paraKey);
//     let paraWhichSmall = document.createElement("p");
//     let nodeWhichSmall = document.createTextNode(e.charCode);
//     paraWhichSmall.appendChild(nodeWhichSmall);
//     let elementWhichSmall = document.getElementById("which-small");
//     elementWhichSmall.appendChild(paraWhichSmall);
//     let paraCode = document.createElement("p");
//     let nodeCode = document.createTextNode(e.code);
//     paraCode.appendChild(nodeCode);
//     let elementCode = document.getElementById("code");
//     elementCode.appendChild(paraCode);
// })

//create new <p>, add text to <p>, append new <p> and text to named element
// const para = document.createElement("p");
// const node = document.createTextNode(e.charCode);
// para.appendChild(node);
// const element = document.getElementById("which");
// element.appendChild(para);
