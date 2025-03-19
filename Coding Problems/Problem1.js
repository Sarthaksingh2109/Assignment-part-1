// 1. JavaScript Problem: (20 marks)
// Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.

    
function getEvenNum(arr) {
    return arr.filter(function(num) {
        return num % 2 === 0;
    });
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = getEvenNum(arr); 
console.log("Even numbers:", evenNumbers); 


