//Танк едет по дороге, на которой могут быть противотанковые мины. Дорога должна быть представлена
//в виде массива roadMines из 10 boolean-элементов. Если элемент равен true, то это мина. 
//Движение танка должно быть представлено как цикл, в котором одна итерация — продвижение танка на 
//следующий участок дороги (следующий элемент массива). При передвижении выводить в консоль сообщение 
//«танк переместился на ${position}», где position — номер ячейки + 1. Если танк попал на мину, 
//то нужно вывести сообщение «танк повреждён», если это 1-й взрыв, и «танк уничтожен», если это 2-й взрыв. 
//После 2-го взрыва танк считается уничтоженным и прекращает движение.
// это функция, внутри которой нужно написать ваш код
// roadMines (массив ячеек поля) будет задаваться в момент вызова функции,
// как в примере кода под ней
function moveTank(roadMines) {
  let life = 2;
  for (let i = 0; i < roadMines.length; i++) {
    if (roadMines[i] === true) {
      life -= 1;
      if (life === 1) {
        console.log('Танк поврежден');
        console.log(`Танк переместился на ${i + 1}`);
      } else if (life === 0) {
        console.log(`Танк переместился на ${i + 1}`);
        console.log('Танк уничтожен');
        break;
      } else {
        console.log(`Танк переместился на ${i + 1}`);
      }
    } else {
      console.log(`Танк переместился на ${i + 1}`);
    }
  }
}

// вызов функции
moveTank([true, true, true, true, true, true, true, true, true, true]);
// танк проедет по полю без мин
// можете вызывать функцию сколько угодно раз подряд с различными параметрами

// строка ниже необходима, чтобы работало автоматическое тестирование
// не изменяйте этот код!
//export default moveTank;
