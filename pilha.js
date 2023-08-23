/* A pilha(stack) é uma estrutura que insere e remove sempre na mesma extremidade
no topo, LIFO(Last In First Out) 
*/
var pilha=[]
var x
 
//x = parseint(prompt("Informe um número"))
x=7
pilha.push(x)
pilha.push(1)
pilha.push(2)

console.log("Pilha: " + pilha)

x=pilha.pop()

console.log("Elemento: " + x)
console.log("Pilha: " + pilha)