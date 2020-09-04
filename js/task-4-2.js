for (let i = 0; i < array.length; i += 1) {
  const element = array[i];
  const index = i;
  // Write code under this line
  if (cb(element, index, array)) {
    numbers.push(element);
  }
}
return numbers;

/*
вот в этом решении if(cb.call(element, array[i], i, array){ numbers.push(element)} в функцию cb передано больше параметров чем нужно. она принимает element = array[i], const index = i, array больше и не нужно.
Это видно здесь, и нужно в правильно порядке передавать
const isUniq = (element, index, arr) - элемент, индекс, массив. усё.
При чём если вы передали 3 параметра, как выше, а функции нужен один, как ниже
const isEven = (element)
она принимает только нужный ей первый переданный параметр, потому важен порядок, в котором вы записали if (cb(element, index, array))
*/
