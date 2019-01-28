function Mat(){
var a=[[1,2,3],[3,4,5]];
var b=[[1,2,3],[3,4,5]];
var sum=[[],[]];
var c=a[0].length;
var d=a.length;
for(i=0;i<d;i++)
{
    for(j=0;j<c;j++){
        sum[i][j]=a[i][j]+b[i][j];
    }
}
console.log(sum);
}
Mat();