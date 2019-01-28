function D2B(N){
    var COUNT=0;
    arr=[];
    while(N>0){
    var c=N%2;
        if(c===1){
            N=(N-1)/2;
        }
        else{
            N/= 2;
        }
        arr[COUNT]=c;
        COUNT++;
    }
    return arr.reverse();
}
console.log(D2B(25));