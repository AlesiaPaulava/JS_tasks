//С помощью цикла создать перевёрнутый вариант произвольной строки. 
//Например, строка «Привет, мир!» должна превратиться в «!рим ,тевирП».
// это функция, внутри которой нужно написать ваш код
// str (входная строка) будет задаваться в момент вызова функции, как в примере кода под ней
function reverseString(str) {
  // ваш код здесь
  let line = null;
  if (str === line) {
    return '';
  }
  let arr = [];
  for (let i = str.length - 1; i >= 0; i--) {
    arr.push(str[i]);
  }
  line = arr.join('');

  console.log(arr);
  console.log(line);
  return line;
}

// вызов функции
reverseString('abc'); // cba
reverseString('12345'); // 54321
reverseString('');
reverseString('1');
// можете вызывать функцию сколько угодно раз подряд с различными параметрами

// строка ниже необходима, чтобы работало автоматическое тестирование
// не изменяйте этот код!
//export default reverseString;