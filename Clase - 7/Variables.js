//Crear variables/

const UserName = 'user0005';
const UserPassword = '5555';
const SavedPassword = '5555';
const UserAnswer = 'Perla';
const SavedAnswer = 'Perla';

if (UserName !== "user0005") {
console.log ("Su username no existe")
} else if (UserName === "user0005" && UserPassword === SavedPassword) {
    console.log("puede iniciar sesion")
} else if (UserPassword !== SavedPassword && UserAnswer === SavedAnswer) {
    console.log ("puede iniciar sesion")
} else {
    console.log("no puede iniciar sesion")
}