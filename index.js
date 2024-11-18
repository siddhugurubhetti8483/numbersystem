const numbers = [
    3, 7, 2, 15, 9, 20, 5, 14, 12, 1, 8, 11, 6, 19, 4, 10, 17, 13, 16, 18,
];
// Even numbers
for (i = 0; i <= numbers.length - 1; i++) {
    let even = "";
    if (numbers[i] % 2 === 0) {
        even = numbers[i] + " ";
    }
    console.log(even);
}
console.log()

// Odd numbers
for (i = 0; i <= numbers.length - 1; i++) {
    let odd = "";
    if (numbers[i] % 2 !== 0) {
        odd = numbers[i] + " ";
    }
    console.log(odd);
}
