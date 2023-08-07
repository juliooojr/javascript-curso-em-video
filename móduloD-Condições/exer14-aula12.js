var idade = 18

console.log(`Você tem ${idade} anos.`)

if (idade < 16 ) {
    console.log('não vota')
} else {
    if ((idade >= 16 && idade < 18) || (idade >= 65) ) {
        console.log('voto facultativo')
    } else {
        console.log('obrigatório votar')
    }
}

// O mesmo código pode ser escrito de forma simplificada:

if (idade < 16 ) {
    console.log('não vota')
} else if (idade < 18 || idade >= 65) {
        console.log('voto facultativo')
} else {
        console.log('obrigatório votar')
} 