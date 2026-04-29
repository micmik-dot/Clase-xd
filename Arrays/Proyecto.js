const list = ['Ana', 88, 'Carlos', 76, 'Karina', 63]

let suma = 0;
let cantidad = 0;

let aprobados = '';
let reprobados = '';

let ListaTransformada = [];
// Recorrer de 2 en 2
for (let i = 0; i < list.length; i += 2) {
let nombre = list[i];
let nota = list[i + 1];

suma = suma + nota;
cantidad = cantidad + 1;

// Aprobados y Reprobados
if (nota >= 70) {
    if (aprobados === '') {
        aprobados = nombre;
    } else {
        aprobados = aprobados + ',' + nombre;
    }
} else {
    if (reprobados === '') {
        reprobados = nombre;
    } else {
        reprobados = reprobados + ',' + nombre
    }
}

// Convertir a letra
let letra = '';

if (nota >= 95) {
    letra = 'A';
} else if (nota >= 90) {
    letra = 'B';
} else if (nota >= 80) {
    letra = 'C';
} else if (nota >= 70) {
    letra = 'D';
} else {
    letra = 'F';
}
 // Guardar nueva lista
 ListaTransformada.push(nombre);
 ListaTransformada.push(letra);

// Imprimir por estudiante
console.log ('La calificación de' + nombre + 'es' + letra)
}

// Promedio
let promedio = suma / cantidad;

// Outputs
console.log('El promedio de calificaciones es:' + promedio);
console.log('Los estudiantes que aprobaron son' + aprobados);
console.log('Los estudiantes que reprobaron son:' + reprobados)
console.log('La lista transformada es:' + ListaTransformada)