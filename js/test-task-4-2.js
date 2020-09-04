for (let i = 0; i < array.length; i += 1) {
  const element = array[i];
  const index = i;
  // Write code under this line
  if (cb(element, index, array)) {
    numbers.push(element);
  }
}
return numbers;
