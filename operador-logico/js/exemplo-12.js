/*Vamos resolver um problema?

    Pedir para o usuário digitar dois números entre 0 e 10 e mostrar na tela
    um boolean indicando se a média é menor ou igual a 4. Porém, caso um único número seja 0, deve mostrar true


*/

let n1 = Number(prompt("Digite um número entre 0 e 10")) //5
let n2 = Number(prompt("Digite outro número entre 0 e 10"))//0

let media = (n1 + n2) / 2

if(media <= 4 || n1 == 0 || n2 == 0){
    if(true){
        alert("Positivo")
    }
}else{
    alert("Negativo")
}

