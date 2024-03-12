
// Pega o clique para rodar função, verifica se o clique está na tag a
document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();
    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
});


// Função para fazer request assincrona e chamar função
async function carregaPagina(el) {
    try {
    const href = el.getAttribute('href');
    const response = await fetch(href);
    if(response.status !== 200) throw new Error('ERRO 404!!!');
    const html = await response.text();
    carregaResultado(html)
    } catch (e) {
        console.log(e);
    }

        // fetch(href)
        //     .then(response => {
        //         if(response.status !== 200) throw new Error('ERRO 404!!!');
        //         return response.text();
        //     })
        //     .then(html => carregaResultado(html))
        //     .catch(e => console.log(e))
 
}

//Função para chamar os dados e colocar no elemento .resultado
function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}


// fetch('pagina1.html') //já retorna uma promise
//     .then(resposta => {
//         if(resposta.status !== 200) throw new Error("ERRO 404 NOSSO");
//         return resposta.text(); // retorna outra promise
//     })
//     .then(html => console.log(html))
//     .catch(e => console.log(e));

    //sempre que retorna uma promise precisa tratar ela com um .then