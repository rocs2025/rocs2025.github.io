


function descuento(){
    let price = parseFloat(document.getElementById("precio").value);
    let descuento= parseFloat(document.getElementById("descu").value);
    let PrecioTotal
    PrecioTotal = ((price)-(price*descuento))
    window.alert("El precio del producto con el descuento es: "+PrecioTotal);

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