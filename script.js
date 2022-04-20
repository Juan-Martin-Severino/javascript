let nombre;
let numeroparticipante;
const numeroelegido = 7;

do {
  nombre = prompt("Ingrese su nombre");
} while (nombre == "");

alert(
  "¡Hola " +
    nombre +
    "! \n \n Vas a tener 3 intentos para adivinar el número del 1 al 10 que elegí. \n \n ¡Comencemos!"
);

for (let i = 1; i <= 3; i++) {
  numeroparticipante = parseInt(
    prompt("Intento " + i + ". \nIngrese un número:")
  );

  if (numeroparticipante === numeroelegido) {
    alert("¡Felicitaciones! Adivinaste mi número.");
    break;
  } else if (i < 3) {
    alert("¡Lo siento! Intentá de nuevo. ");
  } else {
    alert("¡Perdiste! Se te acabaron las oportunidades. ");
  }
}
