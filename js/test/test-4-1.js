// TODO-3: doMath(2, 3, add) записався в параметр
const doMath = function (a, b, callback) {
  // TODO-4: викликали callback
  // TODO-8: з return результат на місце виклику
  const result = callback(a, b);

  console.log(result);
};

// TODO-1: обявили add
// TODO-6: (a, b)   записалися в  (x, y)
const add = function (x, y) {
  // TODO-7: порахувало і вернуло на місце виклика
  return x + y;
};

// TODO-2: додали add до аргумента
doMath(10, 5, add);

// ! Друга функція
const sub = function (x, y) {
  return x - y;
};

doMath(2, 3, sub);
// ! Друга функція - інший запис

doMath(
  2,
  3,
  (sub = function (x, y) {
    return x - y;
  })
);
