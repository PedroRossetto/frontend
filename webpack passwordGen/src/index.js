import { Senha } from './modules/Senha';
import './assets/css/style.css';


const btnEnviar = document.getElementById("form");
let array = [];

function criarSenha() {
    const senha1 = new Senha();
    const quantidade1 = document.getElementById('quantidade');
    const numeros1 = document.getElementById('numeros');
    const upper1 = document.getElementById('upper');
    const lower1 = document.getElementById('lower');
    const simbol1 = document.getElementById('simbol');
    if(numeros1.checked === true) {
        senha1.numeros = true;
    }
    if(upper1.checked === true) {
        senha1.upper = true;
    }
    if(lower1.checked === true) {
        senha1.lower = true;
    }
    if(simbol1.checked === true) {
        senha1.simbol = true;
    }
    senha1.quantidade = quantidade1.value;
    console.log(senha1);

    for (const prop in senha1) {
        if (senha1.hasOwnProperty(prop)) {
            array.push(senha1[prop]);
        }
    }
    console.log(array);
    
    return senha1;
}



btnEnviar.addEventListener('submit', e => {
    e.preventDefault();
    array = []
    criarSenha();

})

