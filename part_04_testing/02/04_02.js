// 2. Написать чистую функцию, которая принимает текст,
// и возвращает массив объектов со структурой

// word: само слово
// code: сумма кодов всех символов слова
// Словом можно считать символы между пробелами
// Для подсчета суммы кодов всех символов слова написать отдельную чистую функцию,
// на нее так же написать тесты

// Сигнатура
// wordStat(text: string): {word: string: code: number}[]
// Пример
// исходный текст:
//
//
//     Lorem ipsum dolor sit amet.
//
//
//     результат:
//
// [
//     { word: 'Lorem', sum: 511 },
//     { word: 'ipsum', sum: 558 },
//     { word: 'dolor', sum: 544 },
//     { word: 'sit', sum: 336 },
//     { word: 'amet.', sum: 469 }
// ]
//
// Написать тесты для этой функции

/**
 * @typedef {Object} ResultItem
 * @property {string} word
 * @property {number} sum
 */

/**
 * @param {string} input test
 * @returns {Array} with hash of word and sum
 */
function wordStat(input) {
    if (input === undefined || input == null)
        throw new Error('Incorrect input!');
    if (input.trim() === "") {
        return [
            { word: "", sum: 0 }
        ];
    }
    const singleSpacesInput = removeNonSingleSpaces(input);
    const arr = singleSpacesInput.split(" ");
    const result = arr.map(calcSumOfWordCharsCodes);
    return result;
}

/**
 * @param {string} text
 * @returns {string}
 */
function removeNonSingleSpaces(text) {
    while (text.includes("  ")) {
        text = text.replace("  ", " ");
    }
    return text;
}

/**
 * @param {string} word
 * @returns {ResultItem}
 */
function calcSumOfWordCharsCodes(word) {
    const chars = word.split("");
    const charsCodes = chars.map(function(item) {
        if (item === "")
            return 0;
        return item.charCodeAt(0);
    });
    const sum = (accumulator, currentValue) => accumulator + currentValue;

    return {
        word: word,
        sum: charsCodes.reduce(sum)
    };
}

let input = "Lorem ipsum dolor sit amet.";
result = wordStat(input);
console.table(result);
