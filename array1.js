//lista de frutas = ARRAY

const frutas = ["maça", "banana", "uva", "manga"];
//ÌNDICE frutas    0        1       2        3

console.log(frutas[1]);
console.log(frutas[3]);
console.log(frutas.length);
frutas[1] = "morango"; //altera o valor do elemento
frutas.push("pessego");
frutas.unshift("pera");
console.log(frutas);
console.log(frutas.length);

frutas[3] = "abacate";
frutas.push("melão");
console.log(frutas)