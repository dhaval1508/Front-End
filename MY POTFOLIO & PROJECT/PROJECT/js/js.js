


const header = document.querySelector("header"); 
window.aadEventListener ("scroll", function () 
{
    header.classList.toggle("sticky", window.scrollY > 120);

});
let menu = Document.querySelector('#menu-icon');

let navlist = Document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active')
}





