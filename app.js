document.addEventListener("keypress", (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.charCode);
    console.log(e.key);
    console.log(e.code);
})

list.addEventListener("keypress", (e) => {
    e.target.textContent = e.target.textContent.toUpperCase();
})

// list.addEventListener("mouseout", (event) => {
//     e.target.textContent = e.target.textContent.toLowerCase();
// })