import { Senha } from './modules/Senha';
import './assets/css/style.css';

const btnEnviar = document.getElementById("form");
const quantidade1 = document.getElementById('quantidade');
const numeros1 = document.getElementById('numeros');
const upper1 = document.getElementById('upper');
const lower1 = document.getElementById('lower');
const simbol1 = document.getElementById('simbol');
const resultado = document.getElementById('resultadoSenha');
let senha = "";
let caracteres;

// Objeto com os tipos de caracteres e seus valores
const tiposCaractere = {
    numeros: '0123456789',
    maisculo: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    minusculo: 'abcdefghijklmnopqrstuvwxyz',
    simbolo: '!@#$%^&*()-_=+/?<>'
}
//Define as propriedades e seus valores e cria uma senha aleatoria com base nos parametros
function criarSenha() {
    senha = "";
    caracteres = "";
    const senha1 = new Senha();
    if (numeros1.checked === true) {
        senha1.numeros = true;
    }
    if (upper1.checked === true) {
        senha1.upper = true;
    }
    if (lower1.checked === true) {
        senha1.lower = true;
    }
    if (simbol1.checked === true) {
        senha1.simbol = true;
    }
    if (senha1.lower === true) {
        caracteres += (tiposCaractere.minusculo)
    }
    if (senha1.numeros === true) {
        caracteres += (tiposCaractere.numeros)
    }
    if (senha1.upper === true) {
        caracteres += tiposCaractere.maisculo
    }
    if (senha1.simbol === true) {
        caracteres += tiposCaractere.simbolo
    }
    
    senha1.quantidade = quantidade1.value;
    for (let i = 0; i < senha1.quantidade; i++) {
        senha += caracteres[parseInt(Math.random() * (caracteres.length - 0) + 0)];
    }
    //Verifica se o argumento é valido
    senha.includes('undefined') ? senha1.senha = 'Necessário no minimo 1 parametro' : senha1.senha = senha;
    return resultado.innerText = senha1.senha;
}
//Pega o evento de submit faz a prevenção e chama a função de criar senha
btnEnviar.addEventListener('submit', e => {
    e.preventDefault();
    criarSenha();
})