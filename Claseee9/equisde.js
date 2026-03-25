const Word = "reconocer";
let WordReversed = "";
const CantidadDeLetras = Word.length;

for (let letra = CantidadDeLetras - 1; letra >= 0; letra--) {
WordReversed = WordReversed + Word.charAt (letra);
}
console.log(WordReversed);

if (Word === WordReversed){
    console.log(`la palabra ${Word} SI es un palindromo`);
} else {
    console.log(`la palabra ${Word} NO es un palindromo`);
}

