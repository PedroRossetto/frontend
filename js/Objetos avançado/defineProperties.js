//Funções property

 // defineProperty (define 1 ) e defineProperties (defines varias)

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
					
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //vai mostrar a chave no print
        value : estoque, //vai mostrar valor no print
        writable : false, // pode ser alterado
        configurable : true, //pode reconfigurar a chave (pode ser modificada defineProperty depois)
    })

    Object.defineProperties(this, {
        nome: {
            enumerable: false,
            writable: false,
        },
        preco: {
            value: true,
            configurable: false,
        },
    })
 }

 const p1 = new Produto('Camisa', 20, 3);
 console.log(p1)
