let nome = "super Super";
let xp = 210;
let nivel;

if (xp < 1000) {
  nivel = "Ferro";
  console.log(`O herói de nome ${nome} está no nível de ${nivel}`);
} else if (xp < 2000) {
  nivel = "Bronze";
  console.log(`O herói de nome ${nome} está no nível de ${nivel}`);
} else if (xp < 5000) {
  nivel = "Prata";
  console.log(`O herói de nome ${nome} está no nível de ${nivel}`);
} else if (xp < 7000) {
  nivel = "Ouro";
  console.log(`O herói de nome ${nome} está no nível de ${nivel}`);
} else if (xp < 8000) {
  nivel = "Platina";
  console.log(`O herói de nome ${nome} está no nível de ${nivel}`);
} else if (xp < 9000) {
  nivel = "Ascendente";
  console.log(`O herói de nome ${nome} está no nível de ${nivel}`);
} else if (xp < 10000) {
  nivel = "Imortal";
  console.log(`O herói de nome ${nome} está no nível de ${nivel}`);
} else if (xp >= 10001) {
  nivel = "Radiante";
  console.log(`O herói de nome ${nome} está no nível de ${nivel}`);
}
