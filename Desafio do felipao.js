// Tópico: Desafio do Classificador de nível de Herói
// Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:
// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 6.000 = Prata
// Se XP for entre 6.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante
// Ao final deve se exibir uma mensagem:
// "O Herói de nome **{nome}** está no nível de **{nivel}**"

// Mãos à obra!
let nome = "Gerson";
let XP = 7500;

if (XP < 1001) {
    console.log("O Herói de nome " + nome + " está no nível de Ferro");
} else if (XP < 2001) {
    console.log("O Herói de nome " + nome + " está no nível de Bronze");
} else if (XP < 6001) {
    console.log("O Herói de nome " + nome + " está no nível de Prata");
} else if (XP < 7001) {
    console.log("O Herói de nome " + nome + " está no nível de Ouro");
} else if (XP < 8001) {
    console.log("O Herói de nome " + nome + " está no nível de Platina");
} else if (XP < 9001) {
    console.log("O Herói de nome " + nome + " está no nível de Ascendente");
} else {
    console.log("O Herói de nome " + nome + " está no nível de Radiante");
}