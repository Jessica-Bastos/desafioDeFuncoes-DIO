let resultado = subtração (125,37)


function subtração(numA,numB) {
    let subtração = numA - numB
    return subtração
}

console.log("Saldo de vitórias do herói: " + resultado)

if(resultado < 10) {
    console.log("O Herói tem um saldo de " + resultado + " e está classificado no nível de Ferro")
}

else if(resultado >= 11 && resultado <= 20) {
    console.log("O Herói tem um saldo de " + resultado + " e está classificado no nível de Bronze")
}

else if(resultado >= 21 && resultado <= 50) {
    console.log("O Herói tem um saldo de " + resultado + " e está classificado no nível de Prata")
}

else if(resultado >= 51 && resultado <= 80) {
    console.log("O Herói tem um saldo de " + resultado + " e está classificado no nível de Ouro")
}

else if(resultado >= 81 && resultado <= 90) {
    console.log("O Herói tem um saldo de " + resultado + " vitórias e está classificado no nível de Diamante")
}

else if(resultado >= 91 && resultado <= 100) {
    console.log("O Herói tem um saldo de " + resultado + " e está classificado no nível de Lendário")
}

else {
    console.log("O Herói tem um saldo de " + resultado + " e está classificado no nível de Imortal")}

