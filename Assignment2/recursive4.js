function fun( x, y) {
if (y == 0) return 0;
return (x + fun(x, y-1)); }
console.log(fun(5,2));