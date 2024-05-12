let vitorias = 39;
let derrotas = 5;

function rankeadas(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    return saldoVitorias;
}

let saldoVitorias = rankeadas(vitorias, derrotas);
let nivel;

if (saldoVitorias < 11) {
    nivel = "Ferro";
} else if (saldoVitorias < 21) {
nivel = "Bronze"
} else if (saldoVitorias < 51) {
    nivel = "Prata"
}else if (saldoVitorias < 81) {
    nivel = "Ouro"
} else if (saldoVitorias < 91){
    nivel = "Diamante"
} else if (saldoVitorias < 101){
    nivel = "Lendário"
} else {
    nivel = "Imortal"
}
  console.log("O Herói tem de saldo de " + saldoVitorias + " está no nível de " + nivel)