// 1. Написать чистую функцию, которая принимает массив чисел
// и возвращает сумму и количество положительных элементов массива.
//
//     Сигнатура
// sumOfPositive(arr: number[]): {count: number, sum: number}
// Пример
// исходный массив:
//     [-91, -93, -45, 67, 96, 40, -34, 96, -42, 58]
// Результат
//
// {
//     count: 5,
//         sum: 357,
// }
//
// Написать тесты для этой функции

/**
 * @typedef {Object} PositiveNumbers
 * @property {number} count
 * @property {number} sum
 */

/**
 * возвращает сумму и количество положительных элементов массива
 *
 * @params {Array} arr масив чисел
 * @returns {PositiveNumbers} сумму и количество положительных элементов массива
 */
function sumOfPositive(arr) {
    const positiveNumbers = arr.filter(number => number > 0);
    const count = positiveNumbers.length;
    const sumFunc = (accumulator, currentValue) => accumulator + currentValue;
    const sum = positiveNumbers.reduce(sumFunc, 0);

    return {
        count: count,
        sum: sum,
    };
}

const arr = [-91, -93, -45, 67, 96, 40, -34, 96, -42, 58];
const result = sumOfPositive(arr);
console.table(result);
