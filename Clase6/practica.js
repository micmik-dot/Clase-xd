const  Lunes = "Lunes";
const Martes = "Martes";
const Miercoles = "Miercoles";
const Jueves = "Jueves";
const Viernes = "Viernes";
const Sabado = "Sabado";
const Domingo = "Domingo";

const hoy = "Miercoles";

console.log ("Hoy es lunes?" + (hoy == Lunes));
console.log("Hoy es mierccoles?" + (hoy == Miercoles));
console.log("Hoy es martes o miercoles" + (hoy == Martes || hoy == Miercoles));
console.log ("Hoy es miercoles y jueves" +(hoy == Miercoles && hoy == Jueves));
