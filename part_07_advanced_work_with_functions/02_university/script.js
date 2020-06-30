'use strict';

console.info("=== Student ===");
const student1 = new Student('Ф_1 И_1 О_1');
console.log(student1);
const student2 = new Student('Ф_2 И_2 О_2');
console.log(student2);
const student3 = new Student('Ф_3 И_3 О_3');
student3.healthy = false;
console.log(student3);


console.info("=== Group ===");
const group1 = new Group("G_1");
group1.students = [student1, student2, student3];
console.log(group1);
console.log(group1.absentStudents());
