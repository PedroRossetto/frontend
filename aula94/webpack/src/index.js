let data = new Date();

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function organizarData(data) {
    let dia = zeroAEsquerda(data.getDate());
    let mes = zeroAEsquerda(data.getMonth() + 1);
    let ano = zeroAEsquerda(data.getFullYear());
    let hora = zeroAEsquerda(data.getHours());
    let minuto = zeroAEsquerda(data.getMinutes());

    return `${dia}/${mes}/${ano} ${hora}:${minuto}`;
}

console.log(organizarData(data));
