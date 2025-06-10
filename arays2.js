var movieline = ["Tanmay", "Karan", "Vraj", "Aksh", "Mahi"];
movieline.push("Kinu");
movieline.push("Maahi");
console.log(movieline);
const person = movieline.pop();
console.log(person, "quit the line");
console.log("The Remaining are ", movieline);
movieline.shift();
console.log("The Remaining are ", movieline);
movieline.unshift("Tanmay");
console.log(movieline);
movieline.splice(2, 1);
console.log(movieline);
movieline.splice(1, 1, "gargi");
console.log(movieline);
var movieline2 = ["Rohan", "Priyansh"];
console.log(movieline.concat(movieline2));
movieline = movieline.concat(movieline2);
console.log(movieline.slice(0, 4));
console.log(

);

console.log(movieline.join('-'));
console.log(movieline.reverse());
