const memo = (func) => {
  const cache = {};
  return (input) => {
    return cache[input] || (cache[input] = func(input));
  };
};

const fibonnaci = (n) => {
  if (n <= 1) {
    return n;
  }
  return fibonnaci(n - 1) + fibonnaci(n - 2);
};
console.time("T1");
console.log(fibonnaci(3));
