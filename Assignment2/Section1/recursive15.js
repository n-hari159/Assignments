function f(n) 
{
    if (Math.trunc(n/2)){
        f(Math.trunc(n/2));
    }
    console.log(n%2); 
}
console.log(f(1024));