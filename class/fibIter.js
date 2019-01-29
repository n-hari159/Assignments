function fib(n){
    var t1=0,t2=1,t3;
    console.log(t1);
    console.log(t2);
    for(i=0;i<(n-2);i++){
        t3=t1+t2;
        t1=t2;
        t2=t3;
        console.log(t3);
    }
}
fib(8);