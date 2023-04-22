const populacaoA = 80000;
const taxaCrescimentoA = 0.03;
const populacaoB = 200000;
const taxaCrescimentoB = 0.015;

let anos = 0;
let populacaoAtualA = populacaoA;
let populacaoAtualB = populacaoB;

while (populacaoAtualA < populacaoAtualB) {
  
  populacaoAtualA += populacaoAtualA * taxaCrescimentoA;
  populacaoAtualB += populacaoAtualB * taxaCrescimentoB;

  
  anos++;
}

alert(`Serão necessários ${anos} anos para a população do país A ultrapassar ou igualar a população do país B.`);
