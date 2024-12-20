let vetor = [1, 2, 3, 4, 5]
let inverter = vetor.length

for (let i = 0; i < inverter / 2; i++) {
    
    let pet = vetor[i]
    vetor[i] = vetor[inverter-1 -i]
    vetor[inverter -1 -i] = pet
    
}
console.log(vetor)