// Шестнадцатиричный код AAAAAAAABBCDDDDDD
// А. метка времени (timestamp в секундах)
// B. кластер
// C. тип
// D. идентификатор пользователя
// Все входные данные - целые десятичные числа 
//     (значения можно “зашить” прямо в код решения). 

function normalize(capacity, value) {
    let zeros = ""
    for (let index = 0; index < capacity; index++) {
        zeros += "0"; 
    }
    return zeros.substr(0, capacity - value.length) + value;
}

function convert(time, cluster, type, user) {
    let result = normalize(8, time.toString(16));
    result += normalize(2, cluster.toString(16));
    result += normalize(1, type.toString(16));
    result += normalize(6, user.toString(16));
    return result;
}

let time = 1;
let cluster = 1;
let type = 1;
let user = 1

let result = convert(time, cluster, type, user);

alert('Result: ' + result);
