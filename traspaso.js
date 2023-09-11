





function grados() {
    var f,c;
    var f=parseFloat(document.getElementById("fahren").value);
    c=(f-32)*5/9;
    window.alert("La conversion de fahrenheit a celcius es: "+c);
}














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