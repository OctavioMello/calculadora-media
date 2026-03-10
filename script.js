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
    for (let i = 0; i < lista.length; i++) {
        soma += lista[i];
        } media = soma / lista.length
        return Number(media.toFixed(1))
}

let resultado = media(lista);
alert(`A média das suas notas é ${resultado}`);