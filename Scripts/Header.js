const  boton = document.getElementById("button-toogle");
const menu = document.getElementById("menu-list");
const header = document.getElementById("main-header");

boton.addEventListener("click", () => {
    menu.classList.toggle("showOptions");
    header.classList.toggle("headerActive");
})