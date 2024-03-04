// For 
let i = 1
for (; i < 10; i++) {
    console.log(i)
    if (i==4) {
        break
    }
}


// FOR IN

let tiposFrutas = ["Maça", "Banana", "Pera", "Tangerina"]

for (const frutas of tiposFrutas) {
    console.log(frutas)
}


// FOR OF

for (let i in tiposFrutas) {
    console.log(tiposFrutas[i])
}

