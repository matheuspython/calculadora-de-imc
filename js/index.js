/**
 * menos que 18,5 abaixo do peso
 * entre 18,5 e 24,9 peso normal
 * entre 25 e 29,9 sobrepeso
 * entre 30 e 34,9 obesidade grau 1
 * entre 35 e 39,9 obesidade grau 2
 * mais de 40 obesidade grau 3
 **/
var peso = document.querySelector('input#peso')
var altura = document.querySelector('input#altura')

function calculando(number1, number2) {
    calculo = number1 / (number2 * number2)
    return calculo
}

function criaElemento(texto) {
    if (texto < 18.5) texto += 'kg, abaixo do peso'
    if (18.5 < texto && 24.9 >= texto) texto += 'kg, peso normal'
    if (25 < texto && 29.9 >= texto) texto += 'kg, sobrepeso'
    if (30 < texto && 34.9 >= texto) texto += 'kg, obesidade grau 1'
    if (35 < texto && 39.9 >= texto) texto += 'kg, obesidade grau 2'
    if (texto > 40) texto += 'kg, obesidade grau 3'



    let container = document.querySelector('.container')
    let elemento = document.createElement('div')
    let textoEscrito = document.createTextNode(texto)
    elemento.appendChild(textoEscrito)
    container.appendChild(elemento)

}





function calcular() {
    let valorPeso = peso.value
    let valorAltura = altura.value

    let resultado = calculando(valorPeso, valorAltura)
    criaElemento(resultado)


}