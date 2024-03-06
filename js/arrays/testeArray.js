let conjunto = [21, 5, 6, 4, 9]

// console.log(conjunto.splice(1, 6))
// console.log(conjunto.filter((conj) => conj.length >= 4));
// console.log(conjunto.map)
console.log(conjunto.reduce((accumulator, currentValue) => accumulator + currentValue, conjunto[0]));
conjunto.length = conjunto.length-1
console.log(conjunto.length)
console.log()