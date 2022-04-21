let nombre;
let nombredia;
let cantidadcarne;
let cantidadchedar;
let cantidadcebolla;
let cantidadtomate;
let cantidadlechuga;
let cantidadbacon;
let cantidadhuevo;
let cantidadmayonesa;
let cantidadketchup;
let cantidadmostaza;
let cantidadbarbacoa;
let carne;
let chedar;
let cebolla;
let tomate;
let lechuga;
let bacon;
let huevo;
let mayonesa;
let ketchup;
let mostaza;
let barbacoa;
let precio;
let preciodescuento;
let preciofinal;

const preciopan = 100;
const preciocarne = 200;
const preciochedar = 45;
const preciocebolla = 30;
const preciotomate = 65;
const preciolechuga = 20;
const preciobacon = 40;
const preciohuevo = 20;
const preciomayonesa = 20;
const precioketchup = 15;
const preciomostaza = 15;
const preciobarbacoa = 20;
const descuentolunes = 0.3;
const descuentomiercoles = 0.2;
const descuentodomingo = 0.1;

do {
  nombre = ingresarNombre();
} while (nombre == "");

do {
  nombredia = ingresarNombredia();
} while (nombredia == "");

if (
  nombredia == "lunes" ||
  nombredia == "Lunes" ||
  nombredia == "miercoles" ||
  nombredia == "Miercoles" ||
  nombredia == "miércoles" ||
  nombredia == "Miércoles" ||
  nombredia == "domingo" ||
  nombredia == "Domingo"
) {
  alert(
    "¡Hola " +
      nombre +
      "! \n \n ¡Bienvenido a CoderBurger personalizable! \n \n ¡Armá tu burger soñada! \n \n ¡Hoy es " +
      nombredia +
      " de descuentos!"
  );
} else {
  alert(
    "¡Hola " +
      nombre +
      "! \n \n ¡Bienvenido a CoderBurger personalizable! \n \n ¡Armá tu burger soñada! \n \n ¡Hoy es " +
      nombredia +
      " de Burger!"
  );
}

do {
  cantidadcarne = parseInt(prompt("Ingrese la cantidad de carne que desea: "));
} while (isNaN(cantidadcarne));
carne = calcularPrecioingrediente(preciocarne, cantidadcarne);

do {
  cantidadchedar = parseInt(
    prompt("Ingrese la cantidad de chedar que desea: ")
  );
} while (isNaN(cantidadchedar));
chedar = calcularPrecioingrediente(preciochedar, cantidadchedar);

do {
  cantidadcebolla = parseInt(
    prompt("Ingrese la cantidad de cebolla que desea: ")
  );
} while (isNaN(cantidadcebolla));
cebolla = calcularPrecioingrediente(preciocebolla, cantidadcebolla);

do {
  cantidadtomate = parseInt(
    prompt("Ingrese la cantidad de tomate que desea: ")
  );
} while (isNaN(cantidadtomate));
tomate = calcularPrecioingrediente(preciotomate, cantidadtomate);

do {
  cantidadlechuga = parseInt(
    prompt("Ingrese la cantidad de lechuga que desea: ")
  );
} while (isNaN(cantidadlechuga));
lechuga = calcularPrecioingrediente(preciolechuga, cantidadlechuga);

do {
  cantidadbacon = parseInt(prompt("Ingrese la cantidad de bacon que desea: "));
} while (isNaN(cantidadbacon));
bacon = calcularPrecioingrediente(preciobacon, cantidadbacon);

do {
  cantidadhuevo = parseInt(prompt("Ingrese la cantidad de huevo que desea: "));
} while (isNaN(cantidadhuevo));
huevo = calcularPrecioingrediente(preciohuevo, cantidadhuevo);

do {
  cantidadmayonesa = parseInt(
    prompt("Ingrese la cantidad de mayonesa que desea: ")
  );
} while (isNaN(cantidadmayonesa));
mayonesa = calcularPrecioingrediente(preciomayonesa, cantidadmayonesa);

do {
  cantidadketchup = parseInt(
    prompt("Ingrese la cantidad de ketchup que desea: ")
  );
} while (isNaN(cantidadketchup));
ketchup = calcularPrecioingrediente(precioketchup, cantidadketchup);

do {
  cantidadmostaza = parseInt(
    prompt("Ingrese la cantidad de mostaza que desea: ")
  );
} while (isNaN(cantidadmostaza));
mostaza = calcularPrecioingrediente(preciomostaza, cantidadmostaza);

do {
  cantidadbarbacoa = parseInt(
    prompt("Ingrese la cantidad de barbacoa que desea: ")
  );
} while (isNaN(cantidadbarbacoa));
barbacoa = calcularPrecioingrediente(preciobarbacoa, cantidadbarbacoa);

precio = parseInt(
  calcularPrecioparcial(
    preciopan,
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
    barbacoa
  )
);
console.log("El precio parcial es: $" + precio);
alert("El precio de tu Burger es de: $" + precio);

if (nombredia == "lunes" || nombredia == "Lunes") {
  preciodescuento = parseFloat(calcularDescuento(precio, descuentolunes));
} else if (
  nombredia == "miercoles" ||
  nombredia == "Miercoles" ||
  nombredia == "miércoles" ||
  nombredia == "Miércoles"
) {
  preciodescuento = parseFloat(calcularDescuento(precio, descuentomiercoles));
} else if (nombredia == "domingo" || nombredia == "Domingo") {
  preciodescuento = parseFloat(calcularDescuento(precio, descuentodomingo));
} else {
  preciodescuento = 0;
}
console.log("El descuento es: $" + preciodescuento);
alert("Por ser " + nombredia + ", el descuento es de: $" + preciodescuento);

preciofinal = parseFloat(calcularPreciofinal(precio, preciodescuento));
console.log("El precio final es: $" + preciofinal);
alert("El precio final de tu Burger es: $" + preciofinal);

function ingresarNombre() {
  let nombre = prompt("Ingrese su nombre");
  return nombre;
}

function ingresarNombredia() {
  let nombredia = prompt("Ingrese nombre del día");
  return nombredia;
}

function calcularPrecioingrediente(precioingredientes, cantidadingredientes) {
  let precioingrediente = precioingredientes * cantidadingredientes;
  return precioingrediente;
}

function calcularPrecioparcial(
  preciopan,
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
  barbacoa
) {
  let precio =
    preciopan +
    carne +
    chedar +
    cebolla +
    tomate +
    lechuga +
    bacon +
    huevo +
    mayonesa +
    ketchup +
    mostaza +
    barbacoa;
  return precio;
}

function calcularDescuento(precio, descuentodia) {
  let preciodescuento = precio * descuentodia;
  return preciodescuento;
}

function calcularPreciofinal(precio, preciodescuento) {
  let preciofinal = precio - preciodescuento;
  return preciofinal;
}
