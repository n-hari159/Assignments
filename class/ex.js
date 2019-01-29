/* function positive(N) {
    if (N > 18) {
      var value = 'Positive';
      let val= "Positive";
    }
    console.log(value);
    console.log(val); //val is out of scope as it is Binded using let
  }
  positive(20); */

// checking for the scope of let,var in functions as well
var a=function(){
  let sum=function(){
    var e=2,f=4;
    var g=e+f;
    return g;
  }
}
console.log(a());