/**
 * JS Objects: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
 * create object person with firstName and lastName properties
 * implement method getFullName that returns full name
 */
const person = {
	firstName : undefined,
	lastName : undefined,
	getFullName: function(){
		console.log('${this.firstName} ${this.lastName}')
	}
}; //put you object here

console.log(person);
person.getFullName();
/**
 * create object student that has property grade and method getGrade
 * set person as prototype of student
 */
const student = {
	grade : undefined,
	getGrade:function(){
		console.log('${this.grade}')
	}} //put you object here

Object.setPrototypeOf(student, person);
// student.getFullName();
// student.getGrade();
// console.log(student);


/**
 * create new instance of student using Object.create
 */
const student2 = Object.create(student); //put you object here
// student2.getFullName();
// console.log(student2);
//console.log(student2.getGrade());
module.exports = {
	person,
	student,
	student2
};