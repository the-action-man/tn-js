// 1. Написать функцию, которая принимает массив чисел и возвращает сумму 
// и количество отрицательных элементов массива.
// Пример
// исходный массив:
// [91, 93, 45, -67, -96, -40, 34, -96, 42, -58]
// результат :
// {
//   count: 5,
//   sum: -357,
// }

function doIt(arr) {
    const negativeNumbers = arr.filter(number => number < 0);
    const sum = (accumulator, currentValue) => accumulator + currentValue;

    return {
        count: negativeNumbers.length,
        sum: negativeNumbers.reduce(sum),
    };
}

let input = [91, 93, 45, -67, -96, -40, 34, -96, 42, -58];
let result = doIt(input);
console.table(result);
