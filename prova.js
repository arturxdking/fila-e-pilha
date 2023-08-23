// Usando somente as operações em pilha (push, pop, cheia_P e vazia_P)
// e fila (inserir, remover, cheia_F e vazia_F), escreva uma função em 
// JavaScript que, remova todos os elementos de uma fila, os insira em pilha, e,
// por fim, retorne o topo da pilha. A função deve passar a fila como parâmetro. 
// Qual elemento será retornado?

var fila=[]
var pilha=[]

fila.push(9)
fila.push(1)
fila.push(3)
fila.push(2)

console.log("Fila Inicial : " + fila)

console.log(" ")

//Função passando a fila como paramento que Remove da fila e insere na pilha

pilha.push(fila.shift())
pilha.push(fila.shift())
pilha.push(fila.shift())
pilha.push(fila.shift())

// Mostra o resultado
console.log("Fila: " + fila)

console.log(" ")

console.log("Pilha " + pilha)

console.log(" ")

//Retorna o topo da pilha

console.log("O topo da pilha é: " + pilha.pop())