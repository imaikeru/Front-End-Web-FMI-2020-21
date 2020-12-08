class Person {
    constructor() {
        let _salary = 1000;

        this.getSecretSalaryInfo = function () {
            return _salary;
        }
    }


}
var person = new Person();
var stoleSalaryInfo = person.getSecretSalaryInfo();

console.log(person.getSecretSalaryInfo()); //принтира 1000
console.log(stoleSalaryInfo); //принтира undefined
