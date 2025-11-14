/*Vamos resolver um problema?

    Pedir para o usuário digitar dois números entre 0 e 10 e mostrar na tela
    um boolean indicando se a média é maior do que 4. Porém, caso um único número seja 0, deve mostrar false.


*/

let n1 = Number(prompt("Digite um número entre 0 e 10"))
let n2 = Number(prompt("Digite outro número entre 0 e 10"))

let media = (n1 + n2) / 2

alert(media > 4 && n1 > 0 && n2 > 0)