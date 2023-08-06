



function trapecio(){

    let h= parseFloat(document.getElementById("altura").value);
    let baseMin= parseFloat(document.getElementById("basemin").value);
    let baseMax= parseFloat(document.getElementById("basemax").value);
    let A
    A= ((baseMin+baseMax) * (h) / 2);
    window.alert("El area de su trapecio es: "+A  +"(m)^2");
}
















/*Menu*/
const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')
toggleBtn.onclick=function () {
 dropDownMenu.classList.toggle('open')
 const isOpen= dropDownMenu.classList.contains('open')
 toggleBtnIcon.classList= isOpen
 ? 'fa-solid fa-xmark' 
 : 'fa-solid fa-bars'
}