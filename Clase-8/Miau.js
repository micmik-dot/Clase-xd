let CantidadDeEstudiantesQueFaltanPorEnviarUnCorreo = 20;
while ( CantidadDeEstudiantesQueFaltanPorEnviarUnCorreo > 0) {
    if (CantidadDeEstudiantesQueFaltanPorEnviarUnCorreo % 2 === 0) {
console.log('Sorpresa para estudiante', CantidadDeEstudiantesQueFaltanPorEnviarUnCorreo)
    } else {
console.log ('Enviar correo a estudiante', CantidadDeEstudiantesQueFaltanPorEnviarUnCorreo); 
    }
CantidadDeEstudiantesQueFaltanPorEnviarUnCorreo = CantidadDeEstudiantesQueFaltanPorEnviarUnCorreo - 1;
}