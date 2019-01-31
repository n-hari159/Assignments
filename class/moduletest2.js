//var h=function (){
//return require("./moduletest1");
//}
//console.log(h());


var h=require("./moduletest1"); //require imports the function/object/file from the specified location
console.log(h.first);
console.log(h.second.name);