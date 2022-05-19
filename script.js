//DECLARACION DE CLASES, ARRAYS Y VARIABLES

class Ingrediente {
  constructor(nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }
}

const pan = new Ingrediente("pan", 100, 50);
const carne = new Ingrediente("carne", 200, 50);
const chedar = new Ingrediente("chedar", 45, 50);
const cebolla = new Ingrediente("cebolla", 100, 50);
const tomate = new Ingrediente("tomate", 65, 50);
const lechuga = new Ingrediente("lechuga", 20, 50);
const bacon = new Ingrediente("bacon", 40, 50);
const huevo = new Ingrediente("huevo", 20, 50);
const mayonesa = new Ingrediente("mayonesa", 20, 50);
const ketchup = new Ingrediente("ketchup", 150, 50);
const mostaza = new Ingrediente("mostaza", 15, 50);
const barbacoa = new Ingrediente("barbacoa", 20, 50);

const ingredientes = [
  pan,
  carne,
  chedar,
  cebolla,
  tomate,
  lechuga,
  bacon,
  huevo,
  mayonesa,
  ketchup,
  mostaza,
  barbacoa,
];

let pedido = [];

if (localStorage.getItem("Pedido")) {
  pedido = JSON.parse(localStorage.getItem("Pedido"));
} else {
  localStorage.setItem("Pedido", JSON.stringify(pedido));
}

class Dias {
  constructor(dia, descuento) {
    this.dia = dia;
    this.descuento = descuento;
  }
}

const lunes = new Dias("lunes", 0.3);
const miercoles = new Dias("miercoles", 0.2);
const miercolesb = new Dias("miércoles", 0.2);
const domingo = new Dias("domingo", 0.1);

const dias = [lunes, miercoles, miercolesb, domingo];
let busqueda;

let nombre;
let dia;

let precioparcial = 0;
let preciodescuento = 0;
let preciofinal;

let formularioPedido = document.getElementById("pedido");
let divListadePrecios = document.getElementById("listadeprecios");
let divDetallePedido = document.getElementById("detallepedido");
let mostrarPedido = document.getElementById("mostrarPedido");

// INTERACCION CON HTML

ingredientes.forEach((ingredienteEnArray) => {
  divListadePrecios.innerHTML += `
  
                <li class="list-group-item">${ingredienteEnArray.nombre}: $${ingredienteEnArray.precio}</li>
              
        `;
});

//SOLICITU DE DATOS POR PROMPT Y SALIDA DE DATOS POR ALERT Y CONSOLA

console.log("Lista de Precios");
for (const ingrediente of ingredientes) {
  console.log(ingrediente.nombre + ": $" + ingrediente.precio);
}

console.log(pedido);

formularioPedido.addEventListener("submit", (e) => {
  e.preventDefault();

  let datosFormulario = new FormData(e.target);

  nombre = datosFormulario.get("nombre");
  pedido.push(nombre);
  dia = datosFormulario.get("dia").toLocaleLowerCase();
  pedido.push(dia);
  busqueda = dias.find((el) => el.dia == pedido[1]);
  pedido.push(
    new Ingrediente(pan.nombre, pan.precio, datosFormulario.get("pan")),
    new Ingrediente(carne.nombre, carne.precio, datosFormulario.get("carne")),
    new Ingrediente(
      chedar.nombre,
      chedar.precio,
      datosFormulario.get("chedar")
    ),
    new Ingrediente(
      cebolla.nombre,
      cebolla.precio,
      datosFormulario.get("cebolla")
    ),
    new Ingrediente(
      tomate.nombre,
      tomate.precio,
      datosFormulario.get("tomate")
    ),
    new Ingrediente(
      lechuga.nombre,
      lechuga.precio,
      datosFormulario.get("lechuga")
    ),
    new Ingrediente(bacon.nombre, bacon.precio, datosFormulario.get("bacon")),
    new Ingrediente(huevo.nombre, huevo.precio, datosFormulario.get("huevo")),
    new Ingrediente(
      mayonesa.nombre,
      mayonesa.precio,
      datosFormulario.get("mayonesa")
    ),
    new Ingrediente(
      ketchup.nombre,
      ketchup.precio,
      datosFormulario.get("ketchup")
    ),
    new Ingrediente(
      mostaza.nombre,
      mostaza.precio,
      datosFormulario.get("mostaza")
    ),
    new Ingrediente(
      barbacoa.nombre,
      barbacoa.precio,
      datosFormulario.get("barbacoa")
    )
  );

  localStorage.setItem("Pedido", JSON.stringify(pedido));

  for (const item of pedido) {
    let precioitem;
    precioitem = parseFloat(item.precio) * parseFloat(item.stock);
    if (isNaN(precioitem) != true) {
      precioparcial += precioitem;
    }
  }
});

mostrarPedido.addEventListener("click", () => {
  let pedidoStorage = JSON.parse(localStorage.getItem("Pedido"));
  console.log(pedidoStorage);

  if (busqueda) {
    preciodescuento = parseFloat(
      calcularDescuento(precioparcial, busqueda.descuento) //UTILIZACION DE FUNCIONES
    );

    preciofinal = parseFloat(
      calcularPreciofinal(precioparcial, preciodescuento)
    );

    divDetallePedido.innerHTML += `
              <h4>Hola ${pedido[0]}! Hoy es ${pedido[1]} de descuentos!</h4>
              <h4>El precio Parcial de tu burguer es de: $${precioparcial}</h4>
              <h4>Por ser ${pedido[1]} el descuento es de: $${preciodescuento}</h4>
              <h4>El precio Final de tu burguer es de: $${preciofinal}</h4>
        `;
  } else {
    preciofinal = precioparcial;

    divDetallePedido.innerHTML += `
              <h4>Hola ${pedido[0]}! Hoy es ${pedido[1]} de Burger!</h4>
              <h4>El precio Parcial de tu burguer es de: $${precioparcial}</h4>
              <h4>Por ser ${pedido[1]} el descuento es de: $${preciodescuento}</h4>
              <h4>El precio Final de tu burguer es de: $${preciofinal}</h4>
`;
  }
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
