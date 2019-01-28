function trace(){
var a=[[1,2],[3,4]];
var sum=0;
if(a.length==a[0].length){
    for(i=0;i<a.length;i++){
        for(j=0;j<a[0].length;j++){
            if(i==j){
                sum+=a[i][j];
            }
        }
    }
    console.log(sum);
}
else{
    console.log("Not Possible");
}
}
trace();