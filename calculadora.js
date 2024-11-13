const ask = require('readline-sync')

let calculadora = true  //declarando minha variavel 'calculadora' , e dizendo q ela é true, ou seja,enquanto ela for 'true' o codigo continuara sendo executado.
                        //se ela se tornar 'false', o codigo nao será mais executado

while (calculadora) {    //iniciando meu laço
    console.clear()
    console.log(`
    [1] - Calcular
    [0] - sair
    `) //apresenta ao usuario um menu com as opcoes 'calcular' que ao ser selecionada, o codigo continua a ser executado, caso seja selecionado
       //'sair' o codigo se encerra.

    let opcoes = Number(ask.question("Digite uma opcao:")) //pedindo pro usuario digitar um numero

    console.clear//limpa o console
    console.clear
    switch (opcoes) {
        case 1:
            console.log(`Entrando na Calculadora`)

            console.clear() //limpa o console

            ask.question("tecle ENTER para continuar") //espera o usuario pressionar ENTER para seguir com o codigo

            console.clear()
            let num1 = Number(ask.question("Digite um numero:")) //pede pro usuario digitar um numero e armazena-o numa variavel
            let num2 = Number(ask.question("Digite outro numero:")) // pede pro usuario digitar outro numero e armazena-o numa outra variavel

            console.log(num1, num2) //mostra no console os numeros selecionados

            console.log(` 
    [2] - Soma
    [3] - Subtração
    [4] - Multiplicação
    [5] - Divisão
    [6] - MOD
    `) //apresenta pro usuario um menu mostrando as operaçoes que podem ser selecionadas

                            //'Number' serve para transformar de string para numero
            let operaçoes = Number(ask.question("Escolha uma Operacao:")) //pede pro usuario escolher uma operaçao para realiza-la com os dois numeros selecionados
            console.clear()

            //na estrutura 'switch', o usuario escolhe qual operaçao sera realizada de acordo com a opçao escolhida 
            switch (operaçoes) {
                case 2: //caso o usuario escolha Soma, sera realizado a operaçao de soma
                    console.log(` ${num1} + ${num2}`)
                    console.log(Soma(num1, num2)) //chama a funçao Soma e exibe o resultado
                    break
                case 3:  //caso o usuario escolha Subtraçao, sera realizado a operaçao de subtraçao
                    console.log(` ${num1} - ${num2}`)
                    console.log(Subtração(num1, num2))
                    break
                case 4:  //caso o usuario escolha multiplicaçao, sera realizado a operaçao de multiplicaçao
                    console.log(` ${num1} * ${num2}`)
                    console.log(Multiplicação(num1, num2))
                    break
                case 5:  //caso o usuario escolha Divisao, sera realizado a operaçao de divisao
                    console.log(` ${num1} / ${num2}`)
                    console.log(Divisão(num1, num2))
                    break
                case 6:  //caso o usuario escolha MOD, sera realizado a operaçao de MOD
                    console.log(` ${num1} % ${num2}`)
                    console.log(MOD(num1, num2))
                    break
            }
            ask.question("tecle ENTER para continuar")
            console.clear()
            break
        case 0:
            calculadora = false //a variavel é alterada, assim quando o usuario digitar numero 0 o codigo nao sera mais executado
            console.clear()
            break
        
    }
} //fechando meu laço



//funçoes das operacoes


function Soma(num1, num2) { //funçao de Soma
    return num1 + num2
}

function Subtração(num1, num2) {  //funçao de Subtraçao
    return num1 - num2
}

function Multiplicação(num1, num2) {  //funçao de Multiplicaçao
    return num1 * num2
}
function Divisão(num1, num2) {  //funçao de Divisao
    return num1 / num2
}

function MOD(num1, num2) {  //funçao de MOD
    return num1 % num2
}

