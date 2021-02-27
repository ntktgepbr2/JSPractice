// const obj = {
//   a: 50,
// };
// obj.a = 220;
// console.log(obj.a);
// var name = "Ivar";
// //let is changeble,const isnt,but we can change keys(a) in objects or arrays
// //var is outdated way to declare variable and also it could be call before its declared with and undefied output
// //instead of an error like it should.
// {
//   const result = 50;
// }
// console.log(result); //let/const isnt reacheble out of its own brackets,but var is.
// console.log(typeof 123);

const text = "World war Third";

console.log(text.slice(1, 5));
console.log(text.substr(0, 5));

function myFunction(x, y, z) {
  console.log(x + y + z);
}
var args = [0, 1, 2];
myFunction.apply("", args);
