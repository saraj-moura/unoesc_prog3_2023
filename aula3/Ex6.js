const readline = require('readline');
const fs = require('entrada6.txt');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let codigoMaisAlto, codigoMaisBaixo, codigoMaisGordo, codigoMaisMagro;
let alturaMaisAlta = 0, alturaMaisBaixa = Infinity;
let pesoMaisGordo = 0, pesoMaisMagro = Infinity;
let somaAlturas = 0, somaPesos = 0, qtdClientes = 0;


rl.question('Digite o caminho do arquivo de entrada: ', (caminhoArquivo) => {
  
  const linhas = fs.readFileSync(caminhoArquivo, 'utf8').split('\n');
  linhas.forEach((linha) => {
    if (linha) { 
      const [codigo, altura, peso] = linha.split(' ');

      
      const alturaNum = parseFloat(altura);
      const pesoNum = parseFloat(peso);

      
      if (alturaNum > alturaMaisAlta) {
        alturaMaisAlta = alturaNum;
        codigoMaisAlto = codigo;
      }
      if (alturaNum < alturaMaisBaixa) {
        alturaMaisBaixa = alturaNum;
        codigoMaisBaixo = codigo;
      }
      if (pesoNum > pesoMaisGordo) {
        pesoMaisGordo = pesoNum;
        codigoMaisGordo = codigo;
      }
      if (pesoNum < pesoMaisMagro) {
        pesoMaisMagro = pesoNum;
        codigoMaisMagro = codigo;
      }

      
      somaAlturas += alturaNum;
      somaPesos += pesoNum;
      qtdClientes++;
    }
  });

  
  const mediaAlturas = somaAlturas / qtdClientes;
  const mediaPesos = somaPesos / qtdClientes;

  
  console.log(`Cliente mais alto: ${codigoMaisAlto}, altura: ${alturaMaisAlta}`);
  console.log(`Cliente mais baixo: ${codigoMaisBaixo}, altura: ${alturaMaisBaixa}`);
  console.log(`Cliente mais gordo: ${codigoMaisGordo}, peso: ${pesoMaisGordo}`);
  console.log(`Cliente mais magro: ${codigoMaisMagro}, peso: ${pesoMaisMagro}`);
  console.log(`Média das alturas: ${mediaAlturas}`);
  console.log(`Média dos pesos: ${mediaPesos}`);

  rl.close(); 
});
