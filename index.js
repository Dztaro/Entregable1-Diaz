let edad = parseInt(prompt("Ingresa tu edad"))
let nombre
let categoria

console.log(edad)


if (edad > 19) {
    console.log("Jugaras en division libre")
} else if (edad <= 18 && edad >= 17) {
    console.log("Jugaras en division juveniles")
} else {
    console.log("Jugaras en division infantiles")
}



const mejoresJugadoresDelClub = [

    {
        nombre: "Luis",
        categoria: "infantiles",
        edad: 13

    },

    {
        nombre: "Lautaro",
        categoria: "Libre",
        edad: 19

    },

    {
        nombre: "Marcelo",
        categoria: "Juveniles",
        edad: 17

    },

];

console.log(mejoresJugadoresDelClub[1])

let jugadoresCategoriaLibre = mejoresJugadoresDelClub.filter(mejoresJugadoresDelClub => mejoresJugadoresDelClub.categoria === "Libre"
);

console.log(jugadoresCategoriaLibre)

let alertita
alertita = "Estas se que te molestan, jajaja"

alert(alertita)


let confirmacion
confirmacion = "Esto no se que es pero entiendo como utilizarlo"

confirm(confirmacion)