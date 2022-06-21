document.getElementById("btn-menu").addEventListener("click", mostrar_menu);

nav = document.getElementById("nav");
background_menu = document.getElementById("back-menu");
function mostrar_menu(){
    nav.style.right ="0px";
    background_menu.style.display ="block";
}