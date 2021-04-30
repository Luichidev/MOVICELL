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
  var cards = document.querySelectorAll(".figure");
  if (cards)
    for (const card of cards) {
      card.onclick = function () {
        list.innerHTML = "";
        rocket.style.display = "none"; // borro el back to top
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
  let cerrar = document.querySelector("span.cerrar");
  if (cerrar)
    cerrar.onclick = function () {
      details.style.display = "none";
      // pongo el back to top que quite al hacer la img grande
      rocket.style.display = "block";
    };

  var inputs = document.getElementsByClassName("mayusc");

  if (inputs)
    for (const inp of inputs) {
      inp.onkeyup = function () {
        this.value = this.value.toUpperCase();
      };
    }

  //obtengo la url donde estoy, lo tranformo a objeto URL para coger su pathmane
  let url = new URL(window.location.href);
  //Si estoy en portada aplico regla shift+q
  if (url.pathname === "/index.html") {
    document.body.onkeyup = function (evento) {
      if (evento.shiftKey && evento.key.toUpperCase() === "Q")
        window.location.href = "contacto.html";
    };

    //La portada se recargará cada 5 minutos = 300000 milisegundos
    setInterval(function () {
      window.location.reload();
    }, 300000);
  }

  var rocket = document.querySelector("#rocket");

  if (rocket) {
    window.onscroll = function () {
      if (
        document.body.scrollTop > 40 ||
        document.documentElement.scrollTop > 40
      ) {
        rocket.style.display = "block";
      } else {
        rocket.style.display = "none";
      }
    };

    rocketImg.onclick = function () {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    };
  }
};
