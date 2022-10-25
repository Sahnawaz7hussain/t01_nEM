function sum(...args) {
  if (arguments.length === 0) {
    return "Sum function should be invoked with atleast 2 arguemsnt";
  } else if (arguments.length === 1) {
    return "Sum function should be invoked with atleast 2 arguemsnt";
  }
  let sumVal = [...args].reduce((a, c) => {
    return a + Number(c);
  }, 0);
  return Number(sumVal);
}
module.exports = sum;
