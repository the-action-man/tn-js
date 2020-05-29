// 5. Подсчитать в тексте количество букв
// Запрашивать у пользователя текст, а затем выводить 
// количество гласных и согласных букв в введенном тексте. 
// Алфавит латинский. 

let text = prompt("Enter text: ", "");
while (true) {
     if (!text.includes("  "))
          break;
     text = text.replace(/  /g, " ");
}
console.log("result=" + text);
