/** Task: 1
 * implement factorial algorithm using for, while, do..while operators
 * assign the result to corresponding variable
 * for -> forFactorial: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
 * while -> whileFactorial: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
 * do..while -> doFactorial: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/do...while
 */
let forFactorial, whileFactorial, doFactorial;
const n = 10; //10! = 3628800

forFactorial=1;
for(let i=n;i>0;i--){
  forFactorial*=i;
}
console.log(forFactorial);


whileFactorial=1;
let i = n;
while(i>0){
  whileFactorial*=i;
  i--;
}
console.log(whileFactorial);


doFactorial=1;
i = n;
do{
doFactorial*=i;
i--;
}while(i>0);
console.log(doFactorial);

/** Task: 2
 * return the concatenated string from an array of substring
 * assign the result to variable 'str'
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
 */
let str="";
const substr = ["I", " love", " JS"];

for(let el of substr){
  str+=el;
}
console.log(str);

/** Task: 3
 * calculate a total of income of certain person
 * assign the result to the variable 'totalIncome'
 * hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
 */
let totalIncome=0;
const personIncomes = {
  salary: 1985,
  rent: -600,
  interestOnDeposit: 250,
  otherExpences: -300
};

for(let key in personIncomes){
  totalIncome+=personIncomes[key];
}
console.log(totalIncome);






module.exports = {
  forFactorial,
  whileFactorial,
  doFactorial,
  str,
  totalIncome
};