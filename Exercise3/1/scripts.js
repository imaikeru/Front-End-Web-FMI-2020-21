// 1.
let arr = [10, 5, 13, 18, 51];
arr.forEach(el => console.log(el));
console.log(arr);
// 2.
let arr2 = arr.map(el => el * 2);
console.log(arr2);

// 3.
function returnEven() {
    return arr.filter(el => el % 2 == 0);
}
console.log(returnEven());
// 4.
function hasElementLessThan10() {
    return !(arr.filter(el => el < 10).length == 0);
}
console.log(hasElementLessThan10());
// 5.
function multipleOfThree() {
    return arr.filter(el => el % 3 == 0);
}
console.log(multipleOfThree());
// 6.
function sum() {
    return arr.reduce((el1, el2) => el1 + el2, 0);
}
console.log(sum());
// 7.
let arr7 = arr.slice(arr.length - 2, arr.length);
console.log(arr7);