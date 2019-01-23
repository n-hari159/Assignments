function fun( n) {
if (n == 0) return;
console.log(Math.trunc(n%2));
fun(Math.trunc(n/2)); }
console.log(fun(25));