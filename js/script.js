function comenzar() {

  primerestado();

  zonadatos = document.getElementById('zonadatos');


  url = document.getElementById("url"+ i);

  url.addEventListener("click", cambiaurl, false);

  window.addEventListener("popstate", nuevaurl, false);
}

function primerestado(){

window.history.replaceState(1,null);

}


function cambiaurl() {

mostrar();

  window.history.pushState(2, null, "about.html");

}

function nuevaurl(e) {

  mostrar(e.state);

}

function mostrar(estado){

if (estado!=1){
  zonadatos.innerHTML = '<div class= "principal-container"> <h1><a href="">Sobre Nosotros</a></h1> <p ><a href="">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque provident, a consequatur veritatis nisi nemo deleniti, accusantium dolor pariatur nesciunt non nam culpa dolore nostrum, perferendis veniam voluptatem voluptas vero.</a></p> </div>';
}
else {
  zonadatos.innerHTML ='<div class= "principal-container"> <div class="col"><h1><a href="">Titulo 1</a></h1> <p ><a href="">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque provident, a consequatur veritatis nisi nemo deleniti, accusantium dolor pariatur nesciunt non nam culpa dolore nostrum, perferendis veniam voluptatem voluptas vero.</a></p> </div> </div>';
}


}

window.addEventListener("load", comenzar, false);
