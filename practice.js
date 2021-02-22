const obj = {
  a: 50,
};
obj.a = 220;
console.log(obj.a);
var name = "Ivar";
//let is changeble,const isnt,but we cant change keys(a) in objects or arrays
//var is outdated way to declare variable and also it could be call before its declared with and undefied output
//instead of an error like it should.
{
  const result = 50;
}
console.log(result); //let/const isnt reacheble out of its own brackets,but var is.

b = 125;
console.log(b);
