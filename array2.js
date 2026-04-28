const alunos = ["Ana", "Bruna", "Carla"];

alunos.push("Diego"); //Adiciona elemento no final do array
alunos.unshift("Alan")
console.log(alunos);

const removido = alunos.pop();
console.log(removido);
console.log(alunos);

console.log(alunos.indexOf("Carla"));
console.log(alunos.indexOf("Pedro"));

console.log(alunos.includes("Ana"));
console.log(alunos.includes("Fernanda"));