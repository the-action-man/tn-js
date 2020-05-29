// 2. Написать функцию, которая принимает текст, и возвращает массив объектов со структурой
// word: само слово
// code: сумма кодов всех символов слова
// Словом можно считать символы между пробелами
// Пример
// исходный текст:
// Lorem ipsum dolor sit amet.
// результат:

// [
//   { word: 'Lorem', sum: 511 },
//   { word: 'ipsum', sum: 558 },
//   { word: 'dolor', sum: 544 },
//   { word: 'sit', sum: 336 },
//   { word: 'amet.', sum: 469 }
// ]

/**
 * @typedef {Object} ResultItem
 * @property {string} word
 * @property {number} sum
 */

function doIt(input) {
    let arr = input.split(" ");
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result[i] = defineObject(arr[i]);
    }
    return result;
}

/**
 * @param {string} word
 * @returns {ResultItem}
 */
function defineObject(word) {
    let sum = 0;
    for (let i = 0; i < word.length; i++) {
        sum += word.charCodeAt(i);
    }
    return { word: word, sum: sum };
}

let input = "Lorem ipsum dolor sit amet.";
result = doIt(input);
console.table(result);
