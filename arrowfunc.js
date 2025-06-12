const square = function (x) {
  return x * x;
};
const sqaure1 = (x) => x * x;
console.log(square(7));
console.log(sqaure1(9));

(function (x) {
  console.log(x * x);
})(8);
