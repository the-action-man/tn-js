// 3. Валидировать и переформатировать введенную пользователем дату из Американского в Российский стандарт
// Американский формат: ММ/ЧЧ/ГГГГ например: 5/30/2006
// Российский формат: ЧЧ.ММ.ГГГГ например: 30.05.2006 

let input = prompt("Enter american date: ", "ММ/ЧЧ/ГГГГ");
let arr = input.split("/");
let mm = arr[0];
if (arr[0].length == 1)
     arr[0] = "0" + arr[0];
let result = arr[1] + arr[0] + arr[2];
alert('Russian date: ' + result)