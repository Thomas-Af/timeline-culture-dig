/*------------------------------Modal 1980 fril------------------------*/
var modal1980fril = document.getElementById("modal_1980_fril");
var btn1980fril = document.getElementById("btn_modal_fril_1980");
var span1980fril = document.getElementsByClassName("closefril1980")[0];
btn1980fril.onclick = function() {
  modal1980fril.style.display = "block";
}
span1980fril.onclick = function() {
  modal1980fril.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal1980fril) {
    modal1980fril.style.display = "none";
  }
}
