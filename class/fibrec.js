function fib(N) {
    if(N<2) return N;
  
    return fib(N-1)+fib(N-2);
}
console.log(fib(3));