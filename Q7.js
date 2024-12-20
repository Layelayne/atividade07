let palavra = prompt("Digite sua palavra: ")

let inverter = ""

for (let i = 0; i < palavra.length; i++) {
    
    inverter = palavra[i]+inverter
    
}
alert(inverter)