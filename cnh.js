const idade = 19;
const maiorIdade = idade >= 18;
const possuiCNH = false;

const podeDirigir = maiorIdade && possuiCNH; //AND
console.log('Pode viajar sozinho?', podeDirigir);

const podeViajarSozinho =  maiorIdade || possuiCNH; //OU, OR
console.log('Pode viajar sozinho?', podeViajarSozinho);

const precisaDeAcompanhante = !maiorIdade;
console.log('Precisa e acompanhante?', precisaDeAcompanhante);