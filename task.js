let radius = 5;
let area = Math.PI*radius**2;
let circumference = 2*Math.PI*radius;

// izmanto toFixed metodi ar diviem cipariem aiz komata

console.log("Laukums: " + area.toFixed(2));
console.log("Apkārtmērs: " + circumference.toFixed(2));


let age = 20;

if (age>=18) {
    console.log("Tu esi tiesīgs balsot");
} else {
    console.log("Tu neesi tiesīgs balsot.");
}
      


let numbers = [5, 10, 15, 20, 5];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

let average = sum / numbers.length;

console.log("Summa: " + sum);
console.log("Vidēja vērtība: "+ average);




function findMax(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

console.log(findMax(5,7)); // Izvade: 7
console.log(findMax(8,10)); // Izvade: 10


let inputString = "sveiki";

function reverseString(str) {
    // izmantot reverse metodi
    let reverse="";
    for (let index = str.length-1; index >= 0; index--) {        
        reverse += str[index];
    }
    return reverse
}

console.log("Oriģināls: " + inputString);
console.log("Apgriezts: " + reverseString(inputString));
        