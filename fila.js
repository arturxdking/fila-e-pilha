// A fila(queue) sempre insere no final e remove no início, assim como na fila de um banco.


var fila=[]
var x

//x = parseInt(prompt("Informe um número"))
x=7
fila.push(x)
fila.push(1)
fila.push(2)

console.log("Fila: " + fila)

x=fila.shift()
console.log("Elemento: " + x)
console.log("Fila: " + fila)

fila.push(10)
console.log(fila)