const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(numbers) {
    let contador = 0;
numbers.forEach(number => {
    contador += number
})
return contador;
}
let contador = average(numbers);
console.log("Números que hay en el array:",numbers.length);
console.log(contador/7);