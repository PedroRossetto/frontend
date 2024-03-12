function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max-min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        // resolve, código executou com sucesso entao resolve ele pra mim
        // reject, deu erro, rejeita isso aqui pra mim
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}


esperaAi('Frase 1', rand(1, 3)).then(resposta => {
    console.log(resposta)
    return esperaAi('Frase 2', rand(1, 3));
})
.then(resposta => {
    console.log(resposta);
})
.catch();
