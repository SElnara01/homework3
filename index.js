// Задание 1

// let num1 = +prompt('Введите начало диапозона');
// let num2 = +prompt('Введите конец диапозона');
// let sum = 0;
// while(num1 <= num2){
//     sum += num1;
//     num1++;
// }
// alert(sum);


// -----------------------------------------------------------------------------------------------

// Задание 2

// let num1 = +prompt('Enter the first number');
// let num2 = +prompt('Enter the second number');
// let nod;
// while(num1 !== 0 && num2 !== 0){
//     if(num1 > num2){
//         num1 = num1 % num2;
//     }else{
//         num2 = num2 % num1;
//     }
// }
// alert(nod = num1 + num2);

// -----------------------------------------------------------------------------------------------

// Задание 3

// let number = +prompt('Enter a number');
// for(let i = 1; i <= number; i++){
//     if(number % i == 0){
//         console.log(i);
//         alert(i);
//     }
// }

// -----------------------------------------------------------------------------------------------

// Задание 4

// let number = prompt('Enter a number');
// let counter = 0;
// while(number > 1){
//     number /= 10;
//     counter++;
// }
// alert(counter);

// -----------------------------------------------------------------------------------------------

// Задание 5

// let number, i, quantity_pos = 0, quantity_neg = 0, quantity_null = 0, quantity_even = 0, quantity_odd = 0;
// for(i = 0; i < 10; i++){
//     number = prompt('Enter ' + (i + 1) + ' number:');
//     if(number < 0){
//         quantity_neg++;
//     }else if(number > 0){
//         quantity_pos++;
//     }else{
//         quantity_null++;
//     }
//     if(number % 2 == 0){
//         quantity_even++;
//     }else{
//         quantity_odd++;
//     }
// }
// alert('Положительных чисел: ' + quantity_pos + '\n' + 'Отрицательных чисел: ' + quantity_neg + '\n' + 'Нулей: ' + quantity_null + '\n' + 'Четных чисел: ' + quantity_even + '\n' + 'Нечетных чисел: ' + quantity_odd); 

// -----------------------------------------------------------------------------------------------

// Задание 6

// do {
//     let num1 = +prompt('Введите первое число');
//     let num2 = +prompt('Введите второе число');
//     let sign = prompt('Выберите знак - + / *');

//     switch (sign) {
//         case '+':
//             alert(num1 + num2);
//             break;
//         case '-':
//             alert(num1 - num2);
//             break;
//         case '/':
//             alert(num1 / num2);
//             break;
//         case '*':
//             alert(num1 * num2);
//         default:
//             break;
//     }

// } while (confirm('Хотите ли вы решить еще один пример?'));

// -----------------------------------------------------------------------------------------------

// Задание 8

// let arr_Week = [
//   "Понедельник",
//   "Вторник",
//   "Среда",
//   "Четверг",
//   "Пятница",
//   "Суббота",
//   "Воскресенье",
// ];
// let i = 0;
// let stop = true;
// while (stop == true) {
//   stop = confirm(`${arr_Week[i]}. Хотите увидеть следующий день недели?`);
//   i++;
//   if (i > 6) {
//     i = 0;
//   }
// }
// alert("Вывод дней недели окончен!");

// -----------------------------------------------------------------------------------------------

// Задание 9

// for (let i = 2; i <= 9; i++) {
//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i} x ${j} = ${i * j}`);
//   }
//   console.log(" ");
// }

//-------

// let table = "";
// for (let i = 2; i <= 9; i++) {
//   for (let j = 1; j <= 10; j++) {
//     table += `${i} x ${j} = ` + i * j + ", ";
//   }
// }
// alert(table);

// -----------------------------------------------------------------------------------------------

// Задание 10

// let number = 0;
// let counter = 0;
// let low = 0;
// let middle = 0;
// let high = 100;
// let answer = "";

// do {
//   number = Math.trunc(
//     +prompt("Введите целое число в диапазоне от 0 до 100: ")
//   );
// } while (number < 0 || number > 100);

// while (low <= high) {
//   middle = Math.trunc((low + high) / 2);
//   answer = prompt(
//     `Вы загадали число ${middle}? Введите "=", если это так. В противном случае, если число меньше, введите "<", либо же ">"`
//   );
//   if (
//     (answer != "=" && middle == number) ||
//     (answer == "<" && middle < number) ||
//     (answer == ">" && middle > number) ||
//     (answer == "=" && middle != number)
//   ) {
//     alert('Вы обманываете');
//     continue;}
//   if (answer == ">") {
//     low = middle + 1;
//   } else if (answer == "<") {
//     high = middle - 1;
//   } else {
//     low = high + 1;
//   }
//   counter++;
// }
// alert(
//   `Итак, за ${counter} попыток бинарным поиском мы установили, что вы загадали число ${middle}!`
// );

