function rand(min=0, max=100) {
    return Math.floor(Math.random() * (max-min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject(false);
            return;
        }
        // resolve, código executou com sucesso entao resolve ele pra mim
        // reject, deu erro, rejeita isso aqui pra mim
        setTimeout(() => {
            resolve('Passei na ' +msg);
            return;
        }, tempo);
    });
}

// esperaAi('Fase 1', 2000)
//     .then(valor => {
//         console.log(valor);
//         return esperaAi('Fase 2', rand());
//     })
//     .then(fase => {
//         console.log(fase);
//         return esperaAi('Fase 3', rand());
//     })
//     .then(fase => {
//         console.log(fase);
//     })
//     .catch(e => console.log(e));

async function executa() {
    try {
   const fase1 = await esperaAi('Fase 1', rand());
   console.log(fase1);
   const fase2 = await esperaAi('Fase 2', rand());
   console.log(fase2);
   const fase3 = await esperaAi(1111, rand());
   console.log(fase3);
    }
    catch(e) {
        console.log(e);
    }
}

