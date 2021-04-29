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

  //click en cualquier elemento de la galeria y nos lleva a su descripcion
  var cards = document.querySelectorAll(".container > figure");

  for (const card of cards) {
    card.onclick = function () {
      list.innerHTML = "";
      details.style.display = "block";
      cardImg.src = this.children[0].src;
      cardImg.alt = this.children[0].alt;
      cardTitle.innerHTML = this.dataset.nombre;
      let listItem = "";
      this.dataset.color
        ? (listItem += `<li class="list-item">Color: ${this.dataset.color}</li>`)
        : "";
      this.dataset.precio
        ? (listItem += `<li class="list-item">Precio: ${this.dataset.precio}</li>`)
        : "";
      this.dataset.pantalla
        ? (listItem += `<li class="list-item">Pantalla: ${this.dataset.pantalla}</li>`)
        : "";
      this.dataset.so
        ? (listItem += `<li class="list-item">S.O.: ${this.dataset.so}</li>`)
        : "";
      this.dataset.ram
        ? (listItem += `<li class="list-item">RAM: ${this.dataset.ram}</li>`)
        : "";
      this.dataset.hd
        ? (listItem += `<li class="list-item">Memoria Interna: ${this.dataset.hd}</li>`)
        : "";

      list.innerHTML = listItem;
    };
  }

  //cerrar la ventana descripcion
  cerrar.onclick = function () {
    details.style.display = "none";
  };
};
