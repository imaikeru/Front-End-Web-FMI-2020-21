// 1.
let arr = [new Date()];
console.log(arr);
// 2.
arr.push(new Date(2018, 11, 8));
arr[1].setHours(21, 0, 0);
console.log(arr);

let newDatesArr = arr.map(a => a.toLocaleDateString("bg-BG").split(" ")[0]);
console.log(newDatesArr);
// 3.
function getWeekdays() {
    return arr.map(date => date.getDay());
}

let weekdays = getWeekdays();
console.log(weekdays);
// 4.
const weekDays = [
    "неделя",
    "понеделник",
    "вторник",
    "сряда",
    "четвъртък",
    "петък",
    "събота"
]

console.log(new Date(arr[0].getFullYear, arr[0].getMonth() + 1, 0));
function merge() {
    return newDatesArr.map((el, index) => {
        let current = new Date(arr[index].getFullYear(), arr[index].getMonth() + 1, 0);
        return "Дата: " + el + ", час: " + arr[index].toLocaleTimeString("bg-BG") + ", " + weekDays[weekdays[index]] + ". " + current.getDate() + " дни"
    }
    )
}
console.log(merge());