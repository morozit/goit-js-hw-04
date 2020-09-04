const isUniq = (element, index, arr) => arr.indexOf(element) === index;
const isEven = (element) => element % 2 === 0;

function filterArray(array, cb) {
  "use strict";
  const numbers = [];
  for (let i = 0; i < array.length; i += 1) {
    const element = array[i];
    const index = i;

    // TODO:    зразок оператора  &&   alert( true && true );   // true alert( false && true );  // false   alert( true && false );  // false      alert( false && false ); // false
    // TODO: PUSH  ===>  в масив [] numbers додаються елементи  з array[i]   які передалися з arr = [1, 2, 3, 4, 5, 1, 2, 5];
    cb(element, index, array) && numbers.push(element);

    // TODO: variant-2    замість оператора  "І" &&    дається if
    // if (cb(element, index, array)) {
    //   numbers.push(element);
    // }

    // TODO: видає масив тру або фалсе
    // numbers[i] = cb(element, index, arr);
  }
  return numbers;
}

const arr = [1, 2, 3, 4, 5, 1, 2, 5];

console.log(filterArray(arr, isUniq));
// [1, 2, 3, 4, 5]

console.log(filterArray(arr, isEven));
// [2, 4, 2]

/*
вот в этом решении if(cb.call(element, array[i], i, array){ numbers.push(element)} в функцию cb передано больше параметров чем нужно. она принимает element = array[i], const index = i, array больше и не нужно.
Это видно здесь, и нужно в правильно порядке передавать
const isUniq = (element, index, arr) - элемент, индекс, массив. усё.
При чём если вы передали 3 параметра, как выше, а функции нужен один, как ниже
const isEven = (element)
она принимает только нужный ей первый переданный параметр, потому важен порядок, в котором вы записали if (cb(element, index, array))
*/
