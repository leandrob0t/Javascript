const nome = 'Leandro';
const sobreNome ='Botelho';
const idade = 34;
const peso = 75;
const alturaEmM = 1.82;
let anoAtual = 2023;
let imc = peso / (alturaEmM * alturaEmM);
let anoNascimento = anoAtual - idade;
console.log(nome ,sobreNome, ',nasceu em', anoNascimento, ',tem', idade, 'anos, pesa', peso, 'kg, tem', alturaEmM, 'de altura e seu IMC é de', imc, '.');
//Pode utilizar o sinal de + no lugar da virgula para separar o texto das variáveis.
//Pode ser feito dessa maneira, utilizando crase (`) para os textos e ${} para as variáveis.
console.log(`${nome, sobreNome} ,nasceu em ${anoNascimento} ,tem ${idade} anos, pesa ${peso} kg, tem ${alturaEmM} de altura e seu IMC é de ${imc}.`);