while(true){

    let num = prompt("Digite seu numero: ")
    num = parseFloat(num)

    if(num<=1){
        break
    }else{
        let ep = true
        for (let i = 2; i < num; i++) {
            if(num%i===0){
                ep = false
                break
            }
            
        }
        if(ep){
            alert("É primo")
        }else{
            alert("Não é primo")
        }
    }

}