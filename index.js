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

