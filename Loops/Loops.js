// Ejercicio 1

//Número a evaluar
const number = 364;

let temp = number;
let suma =  0;

//suma de dígitos
while (temp > 0) {
let digit = temp % 10;
suma = suma + digit;
temp = (temp - digit) / 10;

}
console.log ("La suma de los dígitos del número ${number} es ${suma}");


//Ejercicio 2

//Palabra a evaluar
const word = "Zapato";

let TotalAmount = 0;
let UniqueVowels = "";
 //Recorrer la palabra
 for (let i = 0; i < word.length; i++) {
    let letter = word[i].toLocaleLowerCase

//Verifica si es una vocal
if (letter === "a" ||
    letter === "e" ||
letter === "i" ||
letter === "o" ||
letter === "u" 
) {
TotalAmount++;
if (UniqueVowels.includes (letter)) {
UniqueVowels = UniqueVowels + letter;
}
}
 } 

 let UniqueAmount = UniqueVowels.length;

 //Resultaduuu
 console.log ("la palabra ${word} tiene ${TotalAmount} vocales totales y ${UniqueAmount} vocales unicas");