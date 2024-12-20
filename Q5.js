let vetor = [4, 10, 2, 5, 7, 1]

let maior = 0

for (let i = 0; i < vetor.length; i++) {
    
    if(vetor[i]>maior){
        maior = vetor[i]
    }
}
alert(maior)