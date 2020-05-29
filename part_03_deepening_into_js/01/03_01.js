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
    let count  = 0;
    let sum  = 0;
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] < 0) {
            count++;
            sum += arr[i]
        }
    }
    return {
        count: count,
        sum: sum,
    };
}


let input = [91, 93, 45, -67, -96, -40, 34, -96, 42, -58];
let result = doIt(input);
console.table(result);


