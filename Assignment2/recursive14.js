function f( n) {
if(n<=1) { console.log(n);
} else {
f (n/2);
console.log( n%2); }
}
console.log(f(1024));