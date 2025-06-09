const name = "tanmay"
const repo = 24
console.log(`my name is ${name} and repo count is ${repo}`);
const gamename = new String('tanmay')
console.log(gamename.charAt(2));
console.log(gamename.indexOf('m'));
const newname = gamename.substring(2,6)
console.log(newname);
const anothername = gamename.slice(-4,5)
console.log(anothername);
const othername ="   tanmay   "
console.log(othername);

console.log(othername.trim());
const url = "https://tanmay.com/tanmay%20shah"
console.log(url.replace('%20','-'));
