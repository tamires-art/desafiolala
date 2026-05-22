const alunos = ['joão', 'juliana', 'ana', 'caio'];
const medias = [1, 7, 2.1, 9];

function buscarAluno(nome) {

    const nomeMinusculo = nome.toLowerCase();
    const indice = alunos.indexOf(nomeMinusculo);
    
    if (indice !== -1) {
        return `Aluno: ${nome} | Média: ${medias[indice]}`;
    }
    return `Aluno "${nome}" não foi encontrado.`;
}

console.log(buscarAluno('Ana'));     
console.log(buscarAluno('Juliana')); 
console.log(buscarAluno('Carlos'));  