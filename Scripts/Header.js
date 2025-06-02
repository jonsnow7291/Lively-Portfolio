const  boton = document.getElementById("button-toogle");
const menu = document.getElementById("menu-list");

boton.addEventListener("click", () => {
    menu.classList.toggle("show");
})