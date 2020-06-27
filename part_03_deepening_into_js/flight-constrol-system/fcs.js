function makeTime(hours, minutes) {
    const date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes);
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date.getTime();
}

/**
 * @type {Object<string, Flight>} Список всех рейсов
 */
let flights = {
    BH118: {
        name: 'BH118',
        seats: 28,
        businessSeats: 4,
        registrationStarts: makeTime(21, 0),
        registartionEnds: makeTime(24, 0),
        tickets: [
            {
                id: 'BH118-B50',
                flight: 'BH118',
                fullName: 'Ivanov I. I.',
                type: 0,
                seat: 18,
                buyTime: makeTime(2, 0),
                registrationTime: null,
            }
        ],
    }
};

/**
 * Добавление рейса
 *
 * * назначение номера рейса
 * * подготовка рейса
 *   * вычисление времени регистрации
 *   * подготовка структуры Flight
 *
 * @param {Airliner} airliner Информация о самолете
 * @param {number} time Время вылета
 * @returns {Flight}
 */
// function createFlight(airliner, time) { }

/**
 * Поиск свободного места нужного типа
 *
 * Гарантирует что найдет свободное место нужного типа или вернет null
 *
 * @param {Flight} flight
 * @param {number} type
 * @returns {number} seat
 */
function findAvailableSeat(flight, type) {
    let exists;
    let seat;
    let seatsOfType = 0;

    switch (type) {
        case 0: // standard
            const availableSeats = [];

            for (let i = flight.businessSeats + 1; i <= flight.seats; i++)
                if (!flight.tickets.find(item => item.seat === i))
                    availableSeats.push(i)

            if (availableSeats.length === 0)
                return null;

            const index = Math.floor(Math.random() * availableSeats.length);
            return availableSeats[index];
        case 1: // business
            for (let i = 1; i <= flight.businessSeats; i++)
                if (!flight.tickets.find(item => item.seat === i))
                    seatsOfType++;

            if (seatsOfType === 0)
                return null;

            do {
                seat = Math.floor(Math.random() * flight.businessSeats) + 1;
                exists = flight.tickets.find(item => item.seat === seat);
            } while (exists);

            return seat;
        default:
            throw new Error(`Unknown seat type. Available seat types: 0-standard | 1-business `)
    }
}

/**
 * Покупка билета на самолет
 *
 * * проверка рейса
 * * проверка возможности купить (время и наличие мест)
 * * сохранение данных билета в информации о рейсе
 *
 * @param {string} flightName Номер рейса
 * @param {number} buyTime Время покупки
 * @param {string} fullName Имя пассажира
 * @param {number} type Тип места
 * @returns {Ticket} Возвращаем копию билета
 */
function buyTicket(flightName, buyTime, fullName, type = 0) {
    const flight = flights[flightName];

    if (!flight)
        throw new Error('Flight not found');

    if (flight.tickets.length >= flight.seats)
        throw new Error('No seats available');

    if (buyTime > flight.registartionEnds)
        throw new Error('Time away');

    const seat = findAvailableSeat(flight, type);
    if (!seat)
        throw new Error(`No seats of type ${type} available. You can choose another type`);

    let id;
    do {
        id = flight.name + '-' + Math.random().toString().substr(2, 3);
        exists = flight.tickets.find(item => item.id === id);
    } while (exists);

    /**
     * @type {Ticket}
     */
    const ticket = {
        id,
        flight: flight.name,
        buyTime,
        fullName,
        registrationTime: null,
        type,
        seat,
    }

    flight.tickets.push(ticket);

    // return Object.assign({}, ticket);
    return {
        ...ticket,
    };
}

// const a = buyTicket('BH118', makeTime(5, 10), 'Petrov I. I.');
// console.log(a);


function displayFlights() {
    console.log('*** List of all flights ***');
    console.table(flights);
}

function flightDetailsToConsole(flightName) {
    console.log(`*** Details of flight ${flightName} ***`);
    const flight = flights[flightName];
    if (!flight) {
        console.warn('Flight not found');
        return;
    }

    console.table(flight);
    console.table(flight.tickets);
}

// 3. Для системы контроля авиабилетов, рассмотренной на занятии.
// Добавить функцию прохождения электронной регистрации

/**
 * Функция пробует произвести электронную регистрацию пассажира
 *
 *  * проверка билета
 *  * проверка данных пассажира
 *  * электронную регистрацию можно произвести
 *  *         только в период от 5 до 1 часа до полета
 *
 * @param {string} ticketId номер билета
 * @param {string} fullName имя пассажира
 * @param {number} nowTime текущее время
 * @returns {boolean} успешна ли регистрация
 */
function eRegistration(ticketId, fullName, nowTime) {
    const flightName = extractFlightName(ticketId);
    const flight = flights[flightName];
    if (!flight) {
        console.warn('Flight not found');
        return false;
    }

    const ticket = flight.tickets.find(item => item.id === ticketId);
    if (!ticket) {
        console.warn('ticket not found');
        return false
    }

    if (ticket.fullName !== fullName) {
        console.warn('Passenger data is not correct');
        return false
    }

    if (nowTime < flight.registrationStarts || flight.registartionEnds < nowTime) {
        console.warn('Registration is not available at this time');
        return false
    }

    ticket.registrationTime = nowTime;
    console.info('Registration is completed');
    return true;
}
// How to use eRegistration
let registered = eRegistration('BH118-B50', "Ivanov I. I.", Date.now());

/**
 * @param {string} ticketId номер билета
 * @returns {string} успешна ли регистрация
 */
function extractFlightName(ticketId) {
    return ticketId.split("-")[0];
}


// 4. Для системы контроля авиабилетов, рассмотренной на занятии.
// Добавить функцию для получения отчета по рейсу

/**
 * Функция генерации отчета по рейсу
 *
 *  * проверка рейса
 *  * подсчет
 *
 * @param {string} flightNumber номер рейса
 * @param {number} nowTime текущее время
 * @returns {Report} отчет
 */
function flightReport(flightNumber, nowTime) {
    const flight = flights[flightNumber];
    if (!flight)
        throw new Error('Flight not found');

    // complete - это никак не может быть подсчитано,
    // так как только сотрудники могут поставить статус
    const complete = true;

    return {
        flight: flightNumber,
        registration: (flight.registrationStarts < nowTime || nowTime < flight.registartionEnds),
        complete: complete,
        countOfSeats: flight.seats + flight.businessSeats,
        reservedSeats: flight.tickets.length,
        registeredSeats: calcRegisteredSeats(flight),
    };
}
// How to use flightReport
// const report = flightReport('BH118', Date.now());

/**
 * @param {Flight} flight
 * @returns {number}
 */
function calcRegisteredSeats(flight) {
    const registeredTickets = flight.tickets.filter(item => item.registrationTime)
    return registeredTickets.length;
}

/**
 * Part 05. Обязательное задание 02.
 * 2. Реализовать функцию flightDetails(flightName)
 * которая принимает объект рейса и будет выводить
 * в контейнер <div id=”flight-details”></div> отчет по рейсу
 * и отображать список купленных билетов:
 * номер билета, место, полное имя пассажира,
 * прошел ли регистрацию на рейс.
 *
 * @param {string} flightName
 */
function flightDetails(flightName) {
    const report = flightReport(flightName, Date.now());
    const flightDetails = document.getElementById("flight-details");

    const h1 = document.createElement('h1');
    h1.innerText = "Flight Report";
    flightDetails.append(h1);

    const ul = document.createElement('ul');
    for (let [key, value] of Object.entries(report)) {
        const li = document.createElement('li');
        ul.append(li);
        li.innerText = `${key}: ${value}`;
    }

    flightDetails.append(ul);

    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    h2.innerText = "Tickets:";
    div.append(h2);

    ticketsDetails(flightName, div);
    flightDetails.append(div);
}

/**
 * отображать список купленных билетов:
 * номер билета, место, полное имя пассажира,
 * прошел ли регистрацию на рейс.
 *
 * @param {string} flightName
 * @param {Element} flightDetails
 */
function ticketsDetails(flightName, flightDetails) {
    const flight = flights[flightName];
    if (!flight)
        throw new Error('Flight not found');
    const tickets = flight.tickets;
    const div = document.createElement('div');

    for (const ticket of tickets) {
        ticketDetails(ticket, div);
    }

    flightDetails.append(div);
}

/**
* @param {Ticket} ticket
* @param {Element} flightDetails
*/
function ticketDetails(ticket, flightDetails) {
    const h3 = document.createElement('h3');
    h3.innerText = "Ticket ID: " + ticket.id;
    flightDetails.append(h3);

    const seatElement = document.createElement('p');
    seatElement.innerText = "seat: " + ticket.seat;
    flightDetails.append(seatElement);

    const passengerName = document.createElement('p');
    passengerName.innerText = "Passenger name: " + ticket.fullName;
    flightDetails.append(passengerName);

    const registrationState = document.createElement('p');
    registrationState.innerText = "Registration state: " + (ticket.registrationTime != null);
    flightDetails.append(registrationState);
}

// How to use flightDetails
// flightDetails('BH118');


// 2. Реализовать форму покупки билетов на самолет.
//    -   Форма должна собирать необходимую информацию
// и вызывать функцию buyTicket.
//    -   В случае ошибки показать текст ошибки
//    -   В случае успеха показать купленное место
//    -   Также после успешной покупки билета требуется очистить поля формы,
// чтобы было удобно покупать новый билет

const form = document.getElementById('ticket-purchase-form');
form.addEventListener('submit', handleTicketBuyingForm);

function handleTicketBuyingForm(event) {
    // прерываем всплытие что бы форма не отправлялась
    event.preventDefault();

    const formData = {
        flightName: form.elements.flightName.value,
        fullName: form.elements.fullname.value,
        seatType: parseInt(form.elements.seatType.value, 10),
    };

    try {
        const ticket = buyTicket(formData.flightName, Date.now(), formData.fullName, formData.seatType);
        alert('You successfully buy ticket. Seat number: ' + ticket.seat);
        form.reset();
    } catch (error) {
        console.error(error);
        alert(error.message);
    }

    updateView();
}
