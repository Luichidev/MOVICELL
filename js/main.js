function añadirClases(c1, c2, c3) {
  bar1.classList.add(c1);
  bar2.classList.add(c2);
  bar3.classList.add(c3);
}

function quitarClases(c1, c2, c3) {
  bar1.classList.remove(c1);
  bar2.classList.remove(c2);
  bar3.classList.remove(c3);
}

window.onload = function () {
  //Evento al hacer click en el menu hamburguesa
  btnMenu.onclick = function () {
    const toggle = menu.classList.toggle("show");

    if (toggle) {
      añadirClases("equisTop", "equisMiddle", "equisBottom");
      quitarClases("equisReset", "equisResetMiddle", "equisReset");
    } else {
      quitarClases("equisTop", "equisMiddle", "equisBottom");
      añadirClases("equisReset", "equisResetMiddle", "equisReset");
    }
  };
};
