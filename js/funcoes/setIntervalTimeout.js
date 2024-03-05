function mostrarHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

const timer = setInterval(function () { //criar um intervalo para ficar ativando a função
    console.log(mostrarHora());     // (VAI ATIVAR DE 1 EM 1 SEGUNDO)
}, 1000);


setTimeout(function () { // cria um timer para ativar uma função (VAI FAZER DAQUI 10 SEGUNDOS)
    clearInterval(timer);
}, 10000);