//Напишите функцию filter() , которая создаёт массив email-адресов, 
//не попавших в чёрный список. В качестве аргументов функция должна принимать: массив строк 
//с исходными email адресами, массив строк с email адресами в чёрном списке.

function filter(whiteList, blackList) {
  let newList = [];
  for (let item of whiteList) {
    let black = blackList.indexOf(item);
    if (black === -1) {
      newList.push(item);
    }
  }
  return newList;
}

filter(['a-mail', 'b-mail', 'c-mail'], ['d-mail', 'c-mail']);
filter(['a-mail', 'b-mail', 'c-mail'], ['d-mail']);
filter([], ['d-mail']);


/*function filter (list, blackList) {
  let whiteList = [];
  for (let i = 0; i < list.length; i++) {
    if (!blackList.includes(list[i])) {
      whiteList.push(list[i]);
    }
  }
  return whiteList;
};

filter (['1', '2', '3', '4'], ['2', '3']);
export default filter;
*/
