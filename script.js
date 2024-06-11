const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-task')

let minhaListaDeItens = [];


localStorage.setItem('cor', 'laranja')
var nois = localStorage.getItem('cor')
console.log('minha cor favorito é: ', nois);

function mostrartarefas() {
    let novoli = ''
    
    minhaListaDeItens.forEach((item, posicao) => {
       novoli = novoli +

        `<li class="task ${item.concluida && 'done'}">

            <img src="checked.png"
                alt="tarefa concluída minha chefia"
                onclick="concluidaTarefa(${posicao})"
            />

            <p> ${item.tarefa} </p>

            <img src="trash.png"
                alt="tarefa para o lixin minha chefia"
                onclick="deletarTarefa(${posicao})"
            />

        </li>`
    })

    listaCompleta.innerHTML = novoli
    localStorage.setItem('lista', JSON.stringify(minhaListaDeItens))
}

function concluidaTarefa(posicao){
    minhaListaDeItens[posicao].concluida = 
    !minhaListaDeItens[posicao].concluida

    mostrartarefas()
}

function addNovasTarefas(){
    minhaListaDeItens.push({
        tarefa: input.value,
        concluida: false

    })
    
    input.value = ''
    mostrartarefas()
}

function deletarTarefa(posicao){
    minhaListaDeItens.splice(posicao, 1)
    mostrartarefas()
}

function recarregarTarefa() {
    const tarefaLocalstorage = localStorage.getItem('lista')

    if(tarefaLocalstorage) {
        minhaListaDeItens = JSON.parse(tarefaLocalstorage)
    }

    mostrartarefas()
}

recarregarTarefa()

button.addEventListener('click', addNovasTarefas)