let lista = [];
let numero = Number(prompt('Diga sua nota para calcular sua média:'));
lista.push(numero)
let continuar = prompt('Deseja adicionar mais uma nota?(S para sim ou N para não)');

while (continuar == 'S' || continuar == 's') {
    let numero = Number(prompt('Diga sua nota para calcular sua média:'));
    lista.push(numero)
    let continuar = prompt('Deseja adicionar mais uma nota?(S para sim ou N para não)');
    if (continuar == 'N' || continuar == 'n') {
        break;
    }
}
console.log(lista)

function media(lista) {
    let soma = 0;
    let media;
    let maior = lista[0];
    let menor = lista[0];
    for (let i = 0; i < lista.length; i++) {
        soma += lista[i];
        if (lista[i] > maior) {
            maior = lista[i];
        }
        if (lista[i] < menor) {
            menor = lista[i];
        }
        } media = soma / lista.length
        return [Number(media.toFixed(1)), maior, menor, lista.length];
}

let resultado = media(lista);
console.log(resultado);
alert(`Você informou ${resultado[3]} notas, sendo a média delas igual a ${resultado[0]}, a maior delas ${resultado[1]} e a menor delas ${resultado[2]}`);