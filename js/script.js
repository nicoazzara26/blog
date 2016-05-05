window.onload=function() {
  document.getElementById('Modal-Menu').onclick = function () {
    alert('hola');
  }
}

var modal = document.getElementById('Modal-Menu');

var btn = document.getElementById('BtnModal');

btn.onclick = function abrirmodal() {
 alert
  modal.style.display = "block";
}

window.onclick = function cerrarmodal(event) {
  if(event.target == modal) {
    modal.style.display = "none";
  }
}
