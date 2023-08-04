<!--Hecho por Rodrigo Campos 1° Año -->



function positivo()
 {
     var number1,number2;
      number1 = parseFloat(document.getElementById("n1").value);
      number2 = parseFloat(document.getElementById("n2").value);
      
    if (number1,number2 > 0){
       window.alert("sus numeros son positivos")
      } else{
            window.alert("sus numeros son negativos");
      
    }
      




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