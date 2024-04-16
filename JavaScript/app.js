let btnMenu = document.getElementById('btnmenu');
let menu =  document.getElementById('menumobile');
let overlay = document.getElementById('overlay_menu');
btnMenu.addEventListener('click',()=>{
    menu.classList.add('abrirmenu')
});
menu.addEventListener('click',()=>{
    menu.classList.remove('abrirmenu')
});
overlay.addEventListener('click',()=>{
    menu.classList.remove('abrirmenu')
});