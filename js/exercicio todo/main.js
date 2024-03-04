adicionarBtn = document.getElementById('adicionarTarefa');
tarefa = document.getElementById('tarefa');
lista = document.getElementById('todolist');

let nTarefa = 0;



function criaLi() {
    const li = document.createElement('li');
    
    return li;
}

function criaButton() {
    const deleteBtn = document.createElement('button','br')
    deleteBtn.classList.add('btnDelete')
    return deleteBtn;
}

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    lista.appendChild(li);
    const btn = criaButton();
    btn.innerText = 'Excluir'
    li.appendChild(btn)
    tarefa.value = "";
}

adicionarBtn.addEventListener('click', function() {
    if(!tarefa.value) return;
    criaTarefa(tarefa.value);
});


document.addEventListener('click', function(e) {
    const el = e.target;

    if(el.classList.contains('btnDelete')){
        el.parentElement.remove();
    }
})
