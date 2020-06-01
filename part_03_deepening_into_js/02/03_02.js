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
    let result = arr.map(defineObject);
    return result;
}

/**
 * @param {string} word
 * @returns {ResultItem}
 */
function defineObject(word) {
    const chars = word.split("");
    const chars_codes = chars.map(function(item) {
        return item.charCodeAt(0);
    });
    const sum = (accumulator, currentValue) => accumulator + currentValue;

    return {
        word: word,
        sum: chars_codes.reduce(sum)
    };
}

let input = "Lorem ipsum dolor sit amet.";
result = doIt(input);
console.table(result);
