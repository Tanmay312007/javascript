let mydate = new Date();
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());
console.log(typeof mydate);

let mycreatedate = new Date(2023, 0, 23)
console.log(mycreatedate.toDateString());
mydate.toLocaleString('default',{
    weekday: "long"
})