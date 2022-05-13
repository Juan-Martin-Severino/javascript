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

const pedido = [];

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

let cpan;
let ccarne;
let cchedar;
let ccebolla;
let ctomate;
let clechuga;
let cbacon;
let chuevo;
let cmayonesa;
let cketchup;
let cmostaza;
let cbarbacoa;

let formularioPedido = document.getElementById("pedido");

let precioparcial = 0;
let preciodescuento = 0;
let preciofinal;
let divListadePrecios = document.getElementById("listadeprecios");
let divDetallePedido = document.getElementById("detallepedido");

// INTERACCION CON HTML

ingredientes.forEach((ingredienteEnArray) => {
  divListadePrecios.innerHTML += `
              <h4>${ingredienteEnArray.nombre}: $${ingredienteEnArray.precio}</h4>
        `;
});

//SOLICITU DE DATOS POR PROMPT Y SALIDA DE DATOS POR ALERT Y CONSOLA

console.log("Lista de Precios");
for (const ingrediente of ingredientes) {
  console.log(ingrediente.nombre + ": $" + ingrediente.precio);
}

nombre = document.getElementById("nombre");
nombre.addEventListener("change", () => {
  pedido.push(nombre.value);
  console.log(pedido);
});

dia = document.getElementById("dia");
dia.addEventListener("change", () => {
  pedido.push(dia.value.toLowerCase());
  busqueda = dias.find((el) => el.dia == pedido[1]); // UTILIZACION DE MÉTODO DE BUSQUEDA FIND
  console.log(busqueda);
  console.log(pedido);
});

cpan = document.getElementById("pan");
cpan.addEventListener("change", () => {
  pedido.push(new Ingrediente(pan.nombre, pan.precio, cpan.value));
  console.log(pedido);
});

ccarne = document.getElementById("carne");
ccarne.addEventListener("change", () => {
  pedido.push(new Ingrediente(carne.nombre, carne.precio, ccarne.value));
  console.log(pedido);
});

cchedar = document.getElementById("chedar");
cchedar.addEventListener("change", () => {
  pedido.push(new Ingrediente(chedar.nombre, chedar.precio, cchedar.value));
  console.log(pedido);
});

ccebolla = document.getElementById("cebolla");
ccebolla.addEventListener("change", () => {
  pedido.push(new Ingrediente(cebolla.nombre, cebolla.precio, ccebolla.value));
  console.log(pedido);
});

ctomate = document.getElementById("tomate");
ctomate.addEventListener("change", () => {
  pedido.push(new Ingrediente(tomate.nombre, tomate.precio, ctomate.value));
  console.log(pedido);
});

clechuga = document.getElementById("lechuga");
clechuga.addEventListener("change", () => {
  pedido.push(new Ingrediente(lechuga.nombre, lechuga.precio, clechuga.value));
  console.log(pedido);
});

cbacon = document.getElementById("bacon");
cbacon.addEventListener("change", () => {
  pedido.push(new Ingrediente(bacon.nombre, bacon.precio, cbacon.value));
  console.log(pedido);
});

chuevo = document.getElementById("huevo");
chuevo.addEventListener("change", () => {
  pedido.push(new Ingrediente(huevo.nombre, huevo.precio, chuevo.value));
  console.log(pedido);
});

cmayonesa = document.getElementById("mayonesa");
cmayonesa.addEventListener("change", () => {
  pedido.push(
    new Ingrediente(mayonesa.nombre, mayonesa.precio, cmayonesa.value)
  );
  console.log(pedido);
});

cketchup = document.getElementById("ketchup");
cketchup.addEventListener("change", () => {
  pedido.push(new Ingrediente(ketchup.nombre, ketchup.precio, cketchup.value));
  console.log(pedido);
});

cmostaza = document.getElementById("mostaza");
cmostaza.addEventListener("change", () => {
  pedido.push(new Ingrediente(mostaza.nombre, mostaza.precio, cmostaza.value));
  console.log(pedido);
});

cbarbacoa = document.getElementById("barbacoa");
cbarbacoa.addEventListener("change", () => {
  pedido.push(
    new Ingrediente(barbacoa.nombre, barbacoa.precio, cbarbacoa.value)
  );
  console.log(pedido);
});

formularioPedido.addEventListener("submit", mostrarDetalle);

console.log(pedido);

// DECLARACION DE FUNCIONES

function calcularDescuento(precioparcial, descuento) {
  let preciodescuento = precioparcial * descuento;
  return preciodescuento;
}

function calcularPreciofinal(precioparcial, preciodescuento) {
  let preciofinal = precioparcial - preciodescuento;
  return preciofinal;
}

function mostrarDetalle(e) {
  e.preventDefault();

  console.log("hola");

  for (const item of pedido) {
    let precioitem;
    precioitem = parseFloat(item.precio) * parseFloat(item.stock);
    if (isNaN(precioitem) != true) {
      precioparcial += precioitem;
    }
  }


  preciofinal = parseFloat(calcularPreciofinal(precioparcial, preciodescuento)); //UTILIZACION DE FUNCIONESFf

  if (busqueda) {
    preciodescuento = parseFloat(
      calcularDescuento(precioparcial, busqueda.descuento) //UTILIZACION DE FUNCIONES
    );

    divDetallePedido.innerHTML += `
              <h4>Hola ${pedido[0]}! Hoy es ${pedido[1]} de descuentos!</h4>
              <h4>El precio Parcial de tu burguer es de: $${precioparcial}</h4>
              <h4>Por ser ${pedido[1]} el descuento es de: $${preciodescuento}</h4>
              <h4>El precio Final de tu burguer es de: $${preciofinal}</h4>
        `;
  } else {
    divDetallePedido.innerHTML += `
              <h4>Hola ${pedido[0]}! Hoy es ${pedido[1]} de Burger!</h4>
              <h4>El precio Parcial de tu burguer es de: $${precioparcial}</h4>
              <h4>Por ser ${pedido[1]} el descuento es de: $${preciodescuento}</h4>
              <h4>El precio Final de tu burguer es de: $${preciofinal}</h4>
`;
  }
}
