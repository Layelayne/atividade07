let i 
let seq = [0, 1]

for (let i = 2; i <= 10; i++) {
    seq[i] = seq[i-2] + seq[i-1]

    console.log(seq[i])
}