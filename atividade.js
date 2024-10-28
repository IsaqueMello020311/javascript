// 1. Função de Soma
// Crie uma função chamada `soma` que recebe dois parâmetros `a` e `b`.
// Dentro da função, declare uma variável chamada `resultado` que armazene a soma de `a` e `b`.
// Retorne `resultado` e armazene-o dentro de uma variavel chamada `somaResultado`, e imprima-a no console.
function soma(a , b){
    const resultado = a + b;
    return resultado
}
const somaResultado = soma(3 , 5);
console.log(somaResultado)

// 2. Concatenação de Strings
// Escreva uma função chamada `concatenaNomes` que recebe dois parâmetros `nome` e `sobrenome`.
// Retorne uma string que concatene `nome` e `sobrenome`, separando-os por um espaço e armazene-a em uma variavel chamada "nomeCompleto". Imprima-a no terminal.
function concatenaNomes( nome , sobrenome){
    const nomeCompleto = nome + '' + sobrenome;
    return nomeCompleto
}
const nomeCompleto = concatenaNomes( 'Isaque ' , 'Mello');
console.log(nomeCompleto)

// 3. Maiúsculas
// Crie uma função chamada `maiuscula` que recebe uma string `texto`.
// Dentro da função, utilize o método `toUpperCase()` para converter `texto` em letras maiúsculas.
// Imprima o resultado no console.
function maiuscula(texto){
    const resultado1 = texto.toUpperCase();
    console.log(resultado1)
}

maiuscula('olá, mundo');

// 4. Número de Caracteres
// Escreva uma função chamada `contarCaracteres` que recebe uma string `texto`.
// Declare uma variável chamada `quantidade` que armazene o comprimento da string usando `length`.
// Retorne `quantidade` e armazene o retorno em uma variável de escopo global. Imprima esta variavel no terminal.

// Declara uma variável global para armazenar a quantidade
let quantidade;

function contarCaracteres(texto) {
   
    quantidade = texto.length;

    return quantidade;
}

contarCaracteres('Isaque Lasch Baeta de Mello');

console.log(quantidade);


// 5. Último Elemento de um Array
// Crie uma função chamada `ultimoElemento` que recebe um array `array`.
// Declare uma variável chamada `ultimo` que armazene o último elemento do array usando `array[array.length - 1]`.
// Retorne `ultimo`.
function ultimoElemento(array){
    const ultimo = array[array.length - 1];
    return ultimo
}
const resultado3 = ultimoElemento ([1 , 2 , 3 , 4 , 5]);
console.log(resultado3)

// 6. Remover Último Elemento de um Array
// Escreva uma função chamada `removeUltimo` que recebe um array `array`.
// Utilize o método `slice()` para retornar um novo array sem o último elemento.
function removeUltimo(array){
    return array.slice(0, array.length -1);
}
const resultado4 = removeUltimo([1, 2, 3, 4, 5]);
console.log(resultado4)