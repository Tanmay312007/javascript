function Course(name, title, dis, lang, duration, fees, start, yt) {
  this.name = name;
  this.title = title;
  this.dis = dis;
  this.lang = lang;
  this.duration = duration;
  this.fees = fees;
  this.start = start;
  this.yt = yt;
}
var JavaScript = new Course(
  "Tanmay Shah",
  "Java",
  "Javascript",
  "English",
  40,
  0,
  "1 June",
  "CW"
);
console.log(JavaScript);
