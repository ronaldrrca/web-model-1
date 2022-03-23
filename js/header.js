const menu_icon = document.getElementById("menu_icon");
const mobil_menu = document.getElementById("mobil_menu");
const close_menu = document.getElementById("close_menu");

menu_icon.addEventListener("click", ()=> {
    if (mobil_menu.style.display == "none") {
        mobil_menu.style.display = "block";
    }else{
        mobil_menu.style.display = "none";
    }
})

close_menu.addEventListener("click", ()=> {
    mobil_menu.style.display = "none";
})