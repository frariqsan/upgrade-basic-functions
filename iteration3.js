const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(numbers) {
    let contador = 0;
numbers.forEach((number)=>{
     contador += number
 })
 return contador;
}
let contador = sumAll(numbers);
console.log(contador);