let nome = "super Super";
let vitorias;
let derrotas;
let classificador;
let nivel;

const rank = function (vitorias, derrotas) {
  classificador = vitorias - derrotas;

  if (classificador < 10) {
    nivel = "Ferro";
    console.log(
      `O Herói tem de saldo de ${classificador} está no nível de ${nivel}.`
    );
  } else if (classificador <= 20) {
    nivel = "Bronze";
    console.log(
      `O Herói tem de saldo de ${classificador} está no nível de ${nivel}.`
    );
  } else if (classificador <= 50) {
    nivel = "Prata";
    console.log(
      `O Herói tem de saldo de ${classificador} está no nível de ${nivel}.`
    );
  } else if (classificador <= 80) {
    nivel = "Ouro";
    console.log(
      `O Herói tem de saldo de ${classificador} está no nível de ${nivel}.`
    );
  } else if (classificador <= 90) {
    nivel = "Diamante";
    console.log(
      `O Herói tem de saldo de ${classificador} está no nível de ${nivel}.`
    );
  } else if (classificador <= 100) {
    nivel = "Lendário";
    console.log(
      `O Herói tem de saldo de ${classificador} está no nível de ${nivel}.`
    );
  } else if (classificador >= 101) {
    nivel = "Imortal";
    console.log(
      `O Herói tem de saldo de ${classificador} está no nível de ${nivel}.`
    );
  }
};

rank(11, 1);
