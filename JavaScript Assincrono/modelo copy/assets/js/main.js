// Faz o request e define os parametros do request

const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true);
        xhr.send();
        xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            }
            else {
                reject(xhr.statusText);
            }
        });
    });
};


// Pega o clique para rodar função, verifica se o clique está na tag a
document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();
    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
});


// Função assincrona para carregar a página pelo obj que veio do request
async function carregaPagina(el) {
    const href = el.getAttribute('href');
    const objConfig = {
        method: 'GET',
        url: href,
    };
    
    try{
        const response  = await request(objConfig);
        carregaResultado(response);
    }
    catch(e) {
        console.log(e);
    }
}

//Função para chamar os dados e colocar no elemento .resultado
function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}