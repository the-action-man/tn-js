// 5. Подсчитать в тексте количество букв
// Запрашивать у пользователя текст, а затем выводить 
// количество гласных и согласных букв в введенном тексте. 
// Алфавит латинский. 

let input = prompt("Enter word: ", "")
result = "";
for (let i = input.length - 1; i > -1; i--) {
     result += input[i]
}
console.log("result=" + result);
