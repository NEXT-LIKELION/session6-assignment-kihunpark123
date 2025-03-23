const numbers = [3, 7, 2, 9, 12, 6, 15, 8, 4];

const evenNumbers = numbers.filter(num => num % 2 ===0);
console.log(evenNumbers);

const squaredNumbers = evenNumbers.map(num => num ** 2);
console.log(squaredNumbers);

const sum = squaredNumbers.reduce((acc, cur) => acc + cur, 0);
console.log(sum);