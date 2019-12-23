const drop = document.querySelector(".dropmenu");
const menu = document.querySelector(".menu");
const menuItems = menu.querySelectorAll(".menu__item");
const modal = document.querySelector(".modalWindow");
const cross = document.querySelector(".modalWindow__cross");

drop.addEventListener("click", openWindow);
cross.addEventListener("click", closeWindow);


function openWindow(){
    modal.classList.remove("non-active");
};

function closeWindow(){
    modal.classList.add("non-active");
}
