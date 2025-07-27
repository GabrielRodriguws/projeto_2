//constante para armazenar e manipular o formulario
const form = document.getElementById('formAtividade')

//constantes para add elemento das imagens  
const imgAprovado = '<img src="./imagens/aprovado.png" alt="emoji celebrando>"';
const imgReprovado = '<img src="./imagens/reprovado.png" alt="emoji triste">';

//Array para para atividades e notas
const atividade =[];
const notas =[];


const spanAprovado = '<span class="resultado aprovado">Aprovado</span>' ;
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>' ;

const notaMinima = parseFloat(prompt('Digite a nota mínima'));

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault ();

    addLinha();
    atualizaTabela();
    atualizaMedias();
});

function addLinha(){
    const inputNomeAtividade = document.getElementById('nomeAtividade');
    const inputNotaAtividade = document.getElementById('notaAtividade');

    if(atividade.includes(inputNomeAtividade.value)){
        alert(`A atividade ${inputNomeAtividade.value} já foi inserida, por favor adicione outra atividade.`)
    }else{
    atividade.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));
    
    let linha = `<tr><td>${inputNomeAtividade.value}</td><td>${inputNotaAtividade.value}</td><td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td></tr>`;
    linhas += linha;
    }
    inputNomeAtividade.value ='';
    inputNotaAtividade.value ='';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}


function atualizaMedias(){
    let somaNotas = 0;

    let i = 0;
    while(i<notas.length){
        somaNotas = somaNotas + notas[i];
        i++
    }

    const mediaFinal = somaNotas / notas.length;

    console.log(mediaFinal)

    document.getElementById('mediaFinal').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('resultadoFinal').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

