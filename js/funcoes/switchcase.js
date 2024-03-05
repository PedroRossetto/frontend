// Estudos switch case
// Array e objeto sao ambos objetos
var valor = [1, 2, 3, 4];
console.log(typeof(valor))

switch (typeof(valor)) {
    case typeof("DJIFSDJ"):
        console.log("Esse valor é uma string")
        break
    case typeof(5):
        console.log("Esse valor é um numero")
        break
    case typeof({nome: "pedro", idade: 15}):
        console.log("Esse valor é um objeto")
        break
    default:
        console.log("Valor nao é string numero array ou objeto")
        break
}