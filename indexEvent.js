let menu = document.getElementsByClassName('menu')[0];
let nav = document.getElementsByClassName('nav')[0];
let click=0;
menu.addEventListener('click', function () {
 click++
 if(click%2 == 0){
    nav.style.left= '-2000px'
 }else{
    nav.style.left= '0'
 }
  

});