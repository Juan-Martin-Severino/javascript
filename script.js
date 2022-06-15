//DECLARACION DE CLASES, ARRAYS Y VARIABLES

class Dias {
  constructor(dia, descuento) {
    this.dia = dia;
    this.descuento = descuento;
  }
}

const ingredientes = [];
const DateTime = luxon.DateTime;
const lunes = new Dias(1, 0.3);
const martes = new Dias(2, 0.25);
const miercoles = new Dias(3, 0.2);
const jueves = new Dias(4, 0.15);
const domingo = new Dias(7, 0.1);
const dias = [lunes, martes, miercoles, jueves, domingo];

let busqueda;
let pedidoshistoricos = [];
let pedido = [];
let nombre;
let dia = DateTime.local().weekday;
let precioparcial = 0;
let preciodescuento = 0;
let preciofinal;

let formularioPedido = document.getElementById("pedido");
let divListadePrecios = document.getElementById("listadeprecios");
let divDetallePedido = document.getElementById("detallepedido");

class Ingrediente {
  constructor(nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }
}

if (localStorage.getItem("PedidosHistoricos")) {
  pedidoshistoricos = JSON.parse(localStorage.getItem("PedidosHistoricos"));
} else {
  localStorage.setItem("PedidosHistoricos", JSON.stringify(pedidoshistoricos));
}

fetch("./ingredientes.json")
  .then((response) => response.json())
  .then((datos) => {
    datos.forEach((ingrediente) => {
      ingredientes.push(
        new Ingrediente(
          ingrediente.nombre,
          ingrediente.precio,
          ingrediente.stock
        )
      );

      // INTERACCION CON HTML

      divListadePrecios.innerHTML += `
  
      <li class="list-group-item">${ingrediente.nombre}: $${ingrediente.precio}</li>
          
          `;
    });
  });

formularioPedido.addEventListener("submit", (e) => {
  e.preventDefault();

  let datosFormulario = new FormData(e.target);

  nombre = datosFormulario.get("nombre");
  pedido.push(nombre);
  pedido.push(dia);
  busqueda = dias.find((el) => el.dia == pedido[1]);
  pedido.push(
    new Ingrediente(
      ingredientes[0].nombre,
      ingredientes[0].precio,
      datosFormulario.get("pan")
    ),
    new Ingrediente(
      ingredientes[1].nombre,
      ingredientes[1].precio,
      datosFormulario.get("carne")
    ),
    new Ingrediente(
      ingredientes[2].nombre,
      ingredientes[2].precio,
      datosFormulario.get("chedar")
    ),
    new Ingrediente(
      ingredientes[3].nombre,
      ingredientes[3].precio,
      datosFormulario.get("cebolla")
    ),
    new Ingrediente(
      ingredientes[4].nombre,
      ingredientes[4].precio,
      datosFormulario.get("tomate")
    ),
    new Ingrediente(
      ingredientes[5].nombre,
      ingredientes[5].precio,
      datosFormulario.get("lechuga")
    ),
    new Ingrediente(
      ingredientes[6].nombre,
      ingredientes[6].precio,
      datosFormulario.get("bacon")
    ),
    new Ingrediente(
      ingredientes[7].nombre,
      ingredientes[7].precio,
      datosFormulario.get("huevo")
    ),
    new Ingrediente(
      ingredientes[8].nombre,
      ingredientes[8].precio,
      datosFormulario.get("mayonesa")
    ),
    new Ingrediente(
      ingredientes[9].nombre,
      ingredientes[9].precio,
      datosFormulario.get("ketchup")
    ),
    new Ingrediente(
      ingredientes[10].nombre,
      ingredientes[10].precio,
      datosFormulario.get("mostaza")
    ),
    new Ingrediente(
      ingredientes[11].nombre,
      ingredientes[11].precio,
      datosFormulario.get("barbacoa")
    )
  );

  pedidoshistoricos.push(pedido);

  localStorage.setItem("PedidosHistoricos", JSON.stringify(pedidoshistoricos));

  for (const item of pedido) {
    let precioitem;
    precioitem = parseFloat(item.precio) * parseFloat(item.stock);
    if (isNaN(precioitem) != true) {
      precioparcial += precioitem;
    }
  }

  if (busqueda) {
    preciodescuento = parseFloat(
      calcularDescuento(precioparcial, busqueda.descuento) //UTILIZACION DE FUNCIONES
    );

    preciofinal = parseFloat(
      calcularPreciofinal(precioparcial, preciodescuento)
    );

    mostrarPedidoConDescuento();
  } else {
    preciofinal = precioparcial;

    mostrarPedidoSinDescuento();
  }

  pedido = [];
  precioparcial = 0;
  preciofinal = 0;

  procesado = true;

  Swal.fire({
    icon: "success",
    title: "Pedido Realizado!",
    text: "Su pedido de CoderBurguer se procesó correctamente!",
  });
});

// DECLARACION DE FUNCIONES

function calcularDescuento(precioparcial, descuento) {
  let preciodescuento = precioparcial * descuento;
  return preciodescuento;
}

function calcularPreciofinal(precioparcial, preciodescuento) {
  let preciofinal = precioparcial - preciodescuento;
  return preciofinal;
}

function mostrarPedidoConDescuento() {
  divDetallePedido.innerHTML = `
              <h4>Hola ${pedido[0]}! Hoy es ${
    DateTime.local().weekdayLong
  } de descuentos!</h4>
              <h4>El precio Parcial de tu burguer es de: $${precioparcial}</h4>
              <h4>Por ser ${
                DateTime.local().weekdayLong
              } el descuento es de: $${preciodescuento}</h4>
              <h4>El precio Final de tu burguer es de: $${preciofinal}</h4>
        `;
}
function mostrarPedidoSinDescuento() {
  divDetallePedido.innerHTML = `
              <h4>Hola ${pedido[0]}! Hoy es ${
    DateTime.local().weekdayLong
  } de Burger!</h4>
              <h4>El precio Parcial de tu burguer es de: $${precioparcial}</h4>
              <h4>Por ser ${
                DateTime.local().weekdayLong
              } el descuento es de: $${preciodescuento}</h4>
              <h4>El precio Final de tu burguer es de: $${preciofinal}</h4>
`;
}
