function MyFilter(array, callback) {
  let res = [];
  for (let elem of array) {
    if (callback(elem)) {
      res.push(elem);
    }
  }
  return res;
}

const numbers = [1, 2, 3, 4, 5];

const eventNumbers = num => num % 2 === 0;
// Получим все четные элементы массива
console.log(MyFilter(numbers, eventNumbers));

const greaterThanThree = num => num > 3;
// Получим все элементы массива, со значением большим 3
console.log(MyFilter(numbers, greaterThanThree));
