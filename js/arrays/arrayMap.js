// Map

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
//function(obj, indice, array)
const numeros2 = numeros.map(function(valor) {
    return valor*2;
});

// console.log(numeros2)

const pessoas = [
    { nome: "Ana", idade: 25 },
    { nome: "Pedro", idade: 30 },
    { nome: "Mariana", idade: 22 },
    { nome: "Lucas", idade: 28 },
    { nome: "Carla", idade: 35 },
    { nome: "Rafael", idade: 26 },
    { nome: "Julia", idade: 32 },
    { nome: "Diego", idade: 27 },
    { nome: "Beatriz", idade: 23 },
    { nome: "Gabriel", idade: 29 }
  ];
  
 const pessoasIdade = pessoas.map(function(a, b, d) {
    a.id = d;

    return a.id;
 })

