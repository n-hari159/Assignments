function fact(N){
    if(N==0){
        return 1;
    }
    else{
        return N*fact(N-1);
    }
}
console.log(fact(5));