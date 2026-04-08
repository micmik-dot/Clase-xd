const CantidadDeClientes = 55;

let TotalDeSegundos = 0;

for (let i = 1; i <= CantidadDeClientes; i++)
{
let TiempoDelCliente = 0;

if (i % 2 === 0) {
TiempoDelCliente = (i * 60) + 45;
} else {
 TiempoDelCliente = 20;
}

if (i % 10 === 0){
    TiempoDelCliente += (18 * 60) + 11;
}

if (i % 5 === 0) {
    TiempoDelCliente += (37 * 60);
}

TotalDeSegundos += TiempoDelCliente


let Horas = 0;
let Minutos = 0;
let Segundos = TotalDeSegundos

Horas = (Segundos - (Segundos % 3600)) /
3600;
Segundos = Segundos % 3600;

Minutos = (Segundos - (Segundos % 60)) /
60;
Segundos = Segundos % 60;

if (Horas > 0) {
console.log ("Al cajero le va a tomar" + Horas + "horas," + Minutos + "minutos y" + Segundos + "segundos");

} else if (Minutos > 0) {
    console.log ("Al cajero le va a tomar" + Minutos + "minutos y" + Segundos + "segundos");
} else {
    console.log ("Al cajero le va a tomar" + Segundos + "segundos");
}

}