// Напишіть скрипт, який переводить години в секунди і має робити наступне:

// запитати у користувача кількість годин;
// порахувати, скільки секунд у цій кількості годин;
// записати обчислене значення у змінну;
// вивести цю змінну користувачеві через alert.

let hours = prompt('Write an hour to change it to seconds');

if (Number(hours)) {
    let seconds = hours * 3600;
    alert(`${hours} hours = ${seconds} seconds`);
}
else {
    alert('Please, write a number');
}