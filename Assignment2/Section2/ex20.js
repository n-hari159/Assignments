function Mat(){
    var a=[[1,2],[3,4]];
    var b=[[1,2],[3,4]];
    var result=[[],[]];
    var c=a.length;
    var d=b[0].length;
    var e=a[0].length;
    for(i=0;i<c;i++){
        for(j=0;j<d;j++){
            sum=0;
            for(k=0;k<e;k++){
                sum+=a[i][k]*b[k][j];
            }
            result[i][j]=sum;
        }
    }
    console.log(result);
    }
    Mat();