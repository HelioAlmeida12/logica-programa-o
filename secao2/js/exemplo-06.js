/*Vamos Resolver um problema?




 */

let mensagem = "Olá, eu sou uma 'mensagem de texto'"
let mensagem2 = "Ola, eu sou uma \"mensagem com o texto escapado\""
console.log(mensagem)
console.log(mensagem2)

console.log(typeof 0)
console.log(typeof "0")
console.log(typeof String(0))

let isValid = true
console.log(typeof isValid)
console.log(Boolean("0")) //true
console.log(Boolean(0)) //false
console.log(Boolean(undefined))  //false
console.log(Boolean(null))  //false
console.log(Boolean(""))  //false
console.log(Boolean(NaN))  //false

let naoDeclarado
console.log(naoDeclarado)

let n = parseFloat("a")
alert("Ba"+ n + "a")
//alert(typeof n)