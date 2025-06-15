var car1 = {
  name: "Honda City",
  manufacture: "Honda",
  falsecapacity: 40,
  isautomatic: false,
  greetMe: function(){
    console.log("Hello");
    
  }
};
var car2 = {
  name: "Sonet",
  manufacture: "Kia",
  falsecapacity: 45,
  isautomatic: false,
};
var car3 = {
  name: "Honda Civic",
  manufacture: "Honda",
  falsecapacity: 50,
  isautomatic: true,
};
var obj = {
  key1: "value1",
  key2: "value2",
};
console.log(car1);
console.log(car2);
console.log(car3);
console.log(car1.greetMe());
