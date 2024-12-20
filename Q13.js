let palavra = prompt("Digite sua palavra: ")

let inversor = true

for (let i = 0; i < palavra.length / 2; i++) {
    if(palavra[i] !== palavra[palavra.length -1 -i]){
        inversor = false 
        break
    }
    
}
if(inversor){
    alert("Sua palavra é palindroma")
}else{
    alert("Não é palindroma")
}