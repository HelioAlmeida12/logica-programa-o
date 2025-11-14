/*Vamos resolver um problema?

    Pedir para o usuário digitar dois números entre 0 e 10 e mostrar na tela
    um boolean indicando se a média é maior que 7.


*/

let n1 = Number(prompt("Digite um número entre 0 e 10"))
let n2 = Number(prompt("Digite outro número entre 0 e 10"))

let media = (n1 + n2) / 2

alert("Média maior do que 7? " + (media > 7))