// ! use keys   ЗАМИКАННЯ

const makeSheff = function (name) {
  const makeDelish = function (dish) {
    console.log(`${name} готовит ${dish}`);
  };

  return makeDelish;
};

const mango = makeSheff("Mango");

mango("катлети");
mango("пончик");

const poly = makeSheff("Poly");

poly("катлети");
poly("пончик");
