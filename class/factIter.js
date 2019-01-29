function fact(N){
    var result=1;
    if(N==0){
        return 1;
    }
    else{
        for(i=2;i<=N;i++){
            result *= i;
        }
    return result;
    }
}
console.log(fact(5));