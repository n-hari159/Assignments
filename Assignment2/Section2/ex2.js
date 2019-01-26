function Generate(N){
    console.log("even");
    for (t=0;t<=N;t++){
        if((t%2)==0)
            console.log(t);
    }
    console.log("odd");
    for (t=0;t<=N;t++){
        if((t%2)!=0)
            console.log(t);
    }
}
Generate(5);