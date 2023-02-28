//Напишите функцию calculate(), которая вычисляет и возвращает стоимость корзины товаров 
//после применения всех скидок. В качестве аргументов функция принимает 3 параметра:
//1.Общая сумма корзины
//2.Количество товаров в корзине
//3.Промокод (по умолчанию null)
//Правила и порядок (порядок важен!) начисления скидок:
//Если промокод равен 'ДАРИМ300', то из суммы вычитается 300 рублей. При этом если сумма меньше 300 рублей,
//то итоговая стоимость будет 0.
//При количестве товаров в корзине ≥10 применяется скидка 5% ко всей сумме
//При сумме, превышающей 50 000, применяется скидка 20% к сумме превышения
// (то есть к разнице суммы корзины и 50 000)
//Если промокод равен 'СКИДКА15', то ко всей сумме применяется скидка 15%, но только если сумма ≥20 000
//Каждая следующая скидка должна проверяться и применяться к сумме после применения предыдущих скидок.

function calculate(sumTotal, basket, promo = null) {
  let sum = sumTotal;

  if (promo === 'ДАРИМ300' && sum >= 300) {
    sum -= 300;
  } else if (promo === 'ДАРИМ300' && sum < 300) {
    sum = 0;
  } else {
    sum = sumTotal;
  }

  if (basket >= 10) {
    sum -= sum * 0.05;
  }

  if (sum > 50000) {
    sum -= (sum - 50000) * 0.2;
  }

  if (promo === 'СКИДКА15' && sum >= 20000) {
    sum -= sum * 0.15;
  }

  return sum;
}

calculate(250, 2);
calculate(350, 9);
calculate(400, 11, 'ДАРИМ300');
calculate(50100, 25);
calculate(19000, 20, 'СКИДКА15');
