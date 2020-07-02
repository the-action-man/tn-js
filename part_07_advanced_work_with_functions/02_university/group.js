'use strict';

/**
 * @param {string} name Номер группы
 */
function Group(name) {
    this.name = name;
    this.students = [];

    /**
     * @return {Student[]} проверить всех студентов и вернуть список больных(отсутствующих) студентов
     */
    this.absentStudents = () => {
        return this.students.filter(student => !student.isHealthy());
    }
}
