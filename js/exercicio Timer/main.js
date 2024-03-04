let hora = document.getElementById('hour');
let minuto = document.getElementById('minute');
let segundo = document.getElementById('second');
let segundos = 0;
let minutos = 0;
let horas = 0;
let intervalo;


function timer() {
    
    segundos++;
    if(segundos == 60) {
        minutos += 1
        segundos = 0;
    }
    else if (minutos == 60) {
        horas += 1
        minutos = 0;
    }
    else {
        
    }

    hora.innerHTML = `<th id="hour">${horas  >= 10 ? horas : `0${horas}`}</th>`;
    minuto.innerHTML = `<th id="minute">${minutos  >= 10 ? minutos : `0${minutos}`}</th>`;
    segundo.innerHTML = `<th id="second">${segundos  >= 10 ? segundos : `0${segundos}`}</th>`;
}
let btniniciar = document.querySelector('.iniciar');

intervalo = setInterval(() => {
}, 1000);

function iniciar() {
    btniniciar.disabled = true;
    intervalo = setInterval(() => {
        timer()
    }, 1000);
}



function pausar() {
    clearInterval(intervalo);
    btniniciar.disabled = false;
}

function zerar() {
    clearInterval(intervalo)
    btniniciar.disabled = false;
    segundos = 0;
    minutos = 0;
    horas = 0;

    hora.innerHTML = `<th id="hour">${horas  >= 10 ? horas : `0${horas}`}</th>`;
    minuto.innerHTML = `<th id="minute">${minutos  >= 10 ? minutos : `0${minutos}`}</th>`;
    segundo.innerHTML = `<th id="second">${segundos  >= 10 ? segundos : `0${segundos}`}</th>`;
}


