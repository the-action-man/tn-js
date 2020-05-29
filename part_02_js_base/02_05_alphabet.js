// 5. Подсчитать в тексте количество букв
// Запрашивать у пользователя текст, а затем выводить 
// количество гласных и согласных букв в введенном тексте. 
// Алфавит латинский. 

let consonant = 'bcdfghklmnpqrstvwxz';
let vowel = 'aeijouy';
let consonantQuantity = 0;
let vowelQuantity = 0;
let input = prompt("Enter text: ", "")
for (let i = 0; i <= input.length; i++) {
     if (consonant.includes(input[i]))
          consonantQuantity++;
     else if (vowel.includes(input[i]))
          vowelQuantity++;
}
console.log("consonant=" + consonantQuantity + "\nvowel=" + vowelQuantity);
