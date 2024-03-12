document.addEventListener('DOMContentLoaded', () => {
    let carro = document.querySelector(".carro");
    let cenario = document.querySelector(".cenario");
    let maxHeight = parseFloat(window.getComputedStyle(cenario).getPropertyValue('height'));
    let marginScene = parseFloat(window.getComputedStyle(cenario).getPropertyValue('margin-top'))
    console.log(maxHeight);
    console.log(marginScene)

    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowDown') {
            let currentMargin = parseFloat(window.getComputedStyle(carro).getPropertyValue('margin-top'));
            let newMargin = currentMargin + 15;
            carro.style.marginTop = newMargin + 'px';
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowUp') {
            let currentMargin = parseFloat(window.getComputedStyle(carro).getPropertyValue('margin-top'));
            let newMargin = currentMargin - 15;
            carro.style.marginTop = newMargin + 'px';
        }
    });

    class Obstaculo {
        constructor(id) {
            this.id = id;
            this.element = document.createElement('div');
            this.element.width = 30 + 'px';
            this.element.className = 'obstaculo'
            this.element.style = 'background-color: red'
            this.element.id = 'obstaculo_' + id;
            this.element.height = maxHeight;
            this.element.marginTop = (Math.random() * (marginScene - maxHeight) + maxHeight)

            
        }

    }

    let gameState = true;
    let idCounter = 0

    function criarObstaculos() {
        if (gameState) {
            let novoObstaculo = new Obstaculo(idCounter);
            cenario.appendChild(novoObstaculo.element)
            idCounter++;
        }
    }

    criarObstaculos()
});
