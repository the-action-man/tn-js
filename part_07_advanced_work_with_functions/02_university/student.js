'use strict';

/**
 * @param {string} fullName ФИО одной строкой
 */
function Student(fullName) {
    const arr = fullName.split(" ");
    this.firstName = arr[1];
    this.middleName = arr[2];
    this.lastName = arr[0];
    this._healthy = true;

    /**
     * @return {string} ФИО одной строкой
     */
    this.fullName = () => {
        return this.lastName + " " + this.firstName + " " + this.middleName;
    }

    /**
     * @return {string} фамилия с инициалами
     */
    this.lastNameWithInitials = () => {
        return this.lastName + " " + this.firstName[0] + ". " + this.middleName[0] + ".";
    }

    /**
     * @return {boolean} узнать, здоров ли студент сейчас
     */
    this.isHealthy = () => {
        return this._healthy;
    }
}
