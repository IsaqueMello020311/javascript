const ask = require('readline-sync')

// 1. Crie uma função que receba um número e retorne a soma de todos os números de 1 até o número informado usando um laço `while`.

function somaAteNumero(num1) {

    let soma = 0;

    let i = 1;

    while (i <= num1) {
        soma += i
        i++;
    }
    return soma
}
console.log(somaAteNumero(5))

// Exemplo de chamada:
// console.log(somaAteNumero(5));  // 15 (1+2+3+4+5)

// 2. Crie uma função que receba um array de números e retorne a soma de todos os números maiores que 10 usando um laço `for`.

function somaMaioresQueDez(array) {
    let soma = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] > 10) {
            soma += array[i];
        }
    }

    return soma;
}

console.log(somaMaioresQueDez([5, 15, 3, 20, 7]));


// Exemplo de chamada:
// console.log(somaMaiorQueDez([5, 15, 3, 20, 7]));  // 35 (15 + 20)


// 3. Crie uma função que, dado um array de filmes, retorne o nome do primeiro filme cujo título tem mais de 5 letras usando o `for...of`.

function filmeMaiorQueCincoLetras(Filmes) {

    for (filme of Filmes) {
        if (filme.length > 5) {
            return filme
        }
    }
    return null
}
console.log(filmeMaiorQueCincoLetras(["Shrek", "Aviador", "Avengers", "Star Wars"]));


// Exemplo de chamada:
// console.log(filmeMaiorQueCincoLetras(["O Rei Leão", "Naruto", "Avengers", "Star Wars"]));  // "Avengers"

// 4. Crie uma função que receba um array de nomes de personagens de *Hunter x Hunter* com os personagens "Gon Freecss", "Killua Zoldyck", "Leorio Paradinight" e um array de números representando a força de cada personagem, respectivamente 180, 195, 140. A função deve retornar um terceiro array com o nome dos personagens cuja força seja superior a 150, utilizando um laço `for`.

function personagensComForcaSuperiorA100(nomes, forcas) {
    let personagensFortes = [];


    for (let i = 0; i < nomes.length; i++) {
        if (forcas[i] > 100) {
            personagensFortes.push(nomes[i]);
        }
    }

    return personagensFortes;
}


const nomes = ["Gon Freecss", "Killua Zoldyck", "Leorio Paradinight"];
const forcas = [80, 105, 40];

console.log(personagensComForcaSuperiorA100(nomes, forcas));


// Exemplo de chamada:
//const nomes = ["Gon Freecss", "Killua Zoldyck", "Leorio Paradinight"];
//const forcas = [80, 95, 40];

//console.log(personagemComForcaSuperiorA100(nomes, forcas));


// 5. Crie uma função que receba um array de números e retorne a quantidade de números negativos presentes no array, usando um laço `while`.
function contarNegativos(arrayNegativo) {

    let contador = 0
    let i = 0



    while (i < arrayNegativo.length) {
        if (arrayNegativo[i] < 0) {
            contador++
        }
        i++
    }
    return contador
}
console.log(contarNegativos([7, -2, -5, 13, -9, -1]));

// Exemplo de chamada:
// console.log(contarNegativos([3, -2, -5, 7, 0, -1]));  // 3

// 6. Crie uma função que receba uma string, converta-a para um array e retorne a quantidade de vezes que a letra "a" aparece nela.

function contarLetraA(string) {
    let contador = 0;

    let arrayDeCaracteres = string.split('');[]

    for (let i = 0; i < arrayDeCaracteres.length; i++) {
        if (arrayDeCaracteres[i].toLowerCase() === 'a') {
            contador++;
        }
    }

    return contador;
}

console.log(contarLetraA("Pagode é bom demais!"));

// Exemplo de chamada:
// console.log(contarLetraA("Naruto é um anime top!"));  // 4

// 7. Crie uma função que percorra um array de filmes e retorne um novo array com os filmes que têm o nome começando com a letra "S" usando o laço `for...of`.



// Exemplo de chamada:
// console.log(filmesComLetraS(["Star Wars", "Superman", "Shrek", "Batman"]));  // ["Star Wars", "Superman", "Shrek"]

// 8. Crie uma função que receba um array de strings e retorne a maior substring (palavra) encontrada no array.
function maiorSubstring(arr) {
    let maior = '';


    for (let palavra of arr) {
        if (palavra.length > maior.length) {
            maior = palavra;
        }
    }

    return maior;
}

const palavras = ["João", "Maria", "Alexandre", "Carlos"];
console.log(maiorSubstring(palavras));


// Exemplo de chamada:
// console.log(maiorSubstring(["João", "Maria", "Alexandre", "Carlos"]));  // "Alexandre"

// 9. Crie uma função que calcule o fatorial de um número utilizando um laço `for`.

function fatorial(num2) {

    let resultado = 1;

    for (let i = 1; i <= num2; i++) {
        resultado *= i;
    }

    return resultado;
}

console.log(fatorial(5));

// Exemplo de chamada:
// console.log(fatorial(5));  // 120 (5 * 4 * 3 * 2 * 1)

// 10. Crie uma função que receba um número e retorne uma string que contém esse número repetido, separado por vírgulas, utilizando um laço `while`.

function repetirNumero(numero, vezes) {
    let resultado = ''; 

    let i = 0;  
  
    while (i < vezes) {
        if (i > 0) {
            resultado += ', '; 
        }
        resultado += numero;  
        i++;  
    }

    return resultado; 
}

console.log(repetirNumero(5, 6)); 

// Exemplo de chamada:
// console.log(repetirNumero(7, 4));  // "7, 7, 7, 7"