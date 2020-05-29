// 4. Среднее арифметическое
// Запрашивать у пользователя (prompt) числа пока пользователь не введет пустое значение.
// После ввода каждого числа выводить в консоль предварительный итог.
// По завершению (когда пользователь ввел пустое значение) 
// отобразить (alert) сумму, количество чисел и среднее арифметическое .

let i = 0;
let input = [];
let sum = 0;
while (true) {
     let value = prompt("Enter number: ", "")
     if (value.length == 0)
          break;
     input[i] = parseInt(value, 10);
     sum += input[i];
     console.log("sum=" + sum);
     console.log("quantity=" + input.length);
     console.log("average=" + sum / input.length);
     i++;
}
alert("sum=" + sum + "\n" + "quantity=" + input.length + "\n" + "average=" + sum / input.length);
