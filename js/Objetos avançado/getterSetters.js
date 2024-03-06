// FUNCAO CONSTRUTORA

function Produto5(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;


    Object.defineProperty(this, 'estoque', {
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if(valor.length >= 15) {
                console.log("Não é numero")
                return;
            }
            else {
                console.log("tem menos que 15")
                estoque = valor;
            }
            
        } 
    });
}

const p1 = new Produto5('Camisa', 20, "aaaaaaaaaaaaaaa");
console.log(p1.estoque);



//Funcao fabric
function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            nome = valor;
        }
    };
}
const p2 = criaProduto('Camiseta');

p2.nome = "aaaaaaaaaaadsadaaaaa"
