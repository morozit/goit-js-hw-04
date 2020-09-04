// TODO: element += index
const addIndex = (element, index) => (element += index);

const subIndex = (element, index) => (element -= index);

function mapArray(array, cb) {
  "use strict";

  const numbers = new Array(array.length);

  for (let i = 0; i < array.length; i += 1) {
    const element1 = array[i];
    const index1 = i;
    // TODO: ты говоришь вызвать функцию cb, аргументами которой будут заявленные выше в этой же функции (mapArray) элемент и индекс и сделать с ними то, что заявлено в функции cb

    numbers[i] = cb(element1, index1);
  }

  return numbers;
}

const arr = [1, 2, 3, 4, 5];

console.log(mapArray(arr, addIndex));
// [1, 3, 5, 7, 9]

console.log(mapArray(arr, subIndex));
// [1, 1, 1, 1, 1]
