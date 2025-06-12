function printmessage() {
  console.log("Hello Everyone");
}
printmessage();

function saymessage() {
  console.log("I Am Tanmay");
}
saymessage();
saymessage();
saymessage();
saymessage();
saymessage();
saymessage();

function passmessage() {
  return "Hello Everyone I Am Tanmay";
}
const message = passmessage();
console.log(message.toUpperCase());
const newmessage = message + " Greetings";
console.log(newmessage.toUpperCase());

function passmessagewithparameter(name) {
  return "Hello Everyone" + name + "I Am Tanmay";
}
console.log(passmessagewithparameter("--"));
console.log(passmessagewithparameter("**"));
console.log(passmessagewithparameter("=="));

function sum(a, b, c) {
  return a + b + c;
}
const total = sum(1, 3, 5);
console.log(total);

function sumofallparameter() {
  let s = 0;
  console.log(arguments);
  for (let i = 0; i <= arguments.length - 1; i++) {
    s += arguments[i];
  }
  return s;
}
const tot = sumofallparameter(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(tot);
