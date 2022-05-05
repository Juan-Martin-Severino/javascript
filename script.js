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

let nombre;
let dia;
let precioparcial = 0;
let preciodescuento;
let preciofinal;

//SOLICITU DE DATOS POR PROMPT Y SALIDA DE DATOS POR ALERT Y CONSOLA

console.log("Lista de Precios");
for (const ingrediente of ingredientes) {
  console.log(ingrediente.nombre + ": $" + ingrediente.precio);
}

do {
  nombre = prompt("Ingrese su nombre");
} while (nombre == "");
pedido.push(nombre);

console.log(pedido);

do {
  dia = prompt("Ingrese nombre del día");
} while (dia == "");

pedido.push(dia.toLowerCase());

console.log(pedido);

const busqueda = dias.find((el) => el.dia == pedido[1]); // UTILIZACION DE MÉTODO DE BUSQUEDA FIND
console.log(busqueda);

if (busqueda) {
  alert(
    "¡Hola " +
      pedido[0] +
      "! \n \n ¡Bienvenido a CoderBurger personalizable! \n \n ¡Armá tu burger soñada! \n \n ¡Hoy es " +
      pedido[1] +
      " de descuentos!"
  );
} else {
  alert(
    "¡Hola " +
      pedido[0] +
      "! \n \n ¡Bienvenido a CoderBurger personalizable! \n \n ¡Armá tu burger soñada! \n \n ¡Hoy es " +
      pedido[1] +
      " de Burger!"
  );
}

for (const ingrediente of ingredientes) {
  let cantidad;
  do {
    cantidad = parseInt(
      prompt("Ingrese la cantidad de " + ingrediente.nombre + " que desea: ")
    );
  } while (isNaN(cantidad));

  if (cantidad != 0) {
    pedido.push(
      new Ingrediente(ingrediente.nombre, ingrediente.precio, cantidad)
    );
  }
}

console.log(pedido);

for (const item of pedido) {
  let precioitem;
  precioitem = parseFloat(item.precio) * parseFloat(item.stock);
  if (isNaN(precioitem) != true) {
    precioparcial += precioitem;
  }
}

console.log("El precio de tu Burger es de: $" + precioparcial);
alert("El precio de tu Burger es de: $" + precioparcial);

preciodescuento = parseFloat(
  calcularDescuento(precioparcial, busqueda.descuento) //UTILIZACION DE FUNCIONES
);
console.log("El precio de descuento es de: $" + preciodescuento);
alert("Por ser " + pedido[1] + ", el descuento es de: $" + preciodescuento);

preciofinal = parseFloat(calcularPreciofinal(precioparcial, preciodescuento)); //UTILIZACION DE FUNCIONES

console.log("El precio final de tu Burger es: $" + preciofinal);
alert("El precio final de tu Burger es: $" + preciofinal);

// DECLARACION DE FUNCIONES

function calcularDescuento(precioparcial, descuento) {
  let preciodescuento = precioparcial * descuento;
  return preciodescuento;
}

function calcularPreciofinal(precioparcial, preciodescuento) {
  let preciofinal = precioparcial - preciodescuento;
  return preciofinal;
}
