function ths(n) {
if (n < 1) return; ths(n-1); ths(n-3); console.log(n);
}
console.log(ths(8));