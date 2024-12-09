const menuOculto = document.querySelector(".menu-oculto");
const menu = document.querySelector(".navegacion");

/* en javaScript primero se creA y luego se ejectuta es por eso que tenemos que llamar aL  DOM y ya adentro poner las funcionalidades  */
document.addEventListener("DOMContentLoaded", () => {
  eventos();
});

const eventos = () => {
  menuOculto.addEventListener("click", abrirMenu);
};

const abrirMenu = () => {
  menu.classList.remove("oculto");
  btnCerrar();
};

/* creacion del boton para cerrar la pestaña  */
const btnCerrar = () => {
  const botonCerrar = document.createElement("p");
  const overlay = document.createElement("div");
  const body = document.querySelector("body");

  overlay.classList.add("pantalla-completa");
  body.appendChild(overlay); /* aca hago la fusion */

  /* para que no se creen divs unos encima de otros lo que voy a ahcer es un condicional */
  if (document.querySelectorAll("pantalla-completa").length > 0) {
    return;
  }

  botonCerrar.textContent = "X";
  botonCerrar.classList.add("cerrar");
  menu.appendChild(botonCerrar);
  cerrarNavegacion(botonCerrar, overlay);
};

const cerrarNavegacion = (boton, overlay) => {
  boton.addEventListener("click", () => {
    menu.classList.add("oculto");
    boton.remove();
    overlay.remove();
  });
  overlay.onclick = function () {
    overlay.remove();
    menu.classList.add("oculto");
  };
};
