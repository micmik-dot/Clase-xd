let iteraciones = 100;

while (iteraciones > 0) {
const residuoDe5 = iteraciones % 5 === 0;
const residuoDe3 = iteraciones % 3 === 0;
if  (residuoDe5 && residuoDe3) {
console.log ("el numero", iteraciones, "es multiplo de 3 y 5");
} else if (residuoDe5) {
    console.log("el numero", iteraciones, "es multiplo de 5");
} else if (residuoDe3) {
    console.log("el numero", iteraciones, "es multiplo de 3");
} console.log ("el numero", iteraciones, "no es multiplo de 3 ni de 5");
}