function robot(n,a,b) {
if (n <= 0) return; robot(n-1, a, b+n); console.log(n,a,b); robot(n-1, b, a+n);
}
console.log(robot(9,5,2));