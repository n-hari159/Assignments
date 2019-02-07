function duplicate(a){
    let b=[];
    for(i=0;i<a.length;i++){
        if(b.indexOf(a[i])==-1){
            b.push(a[i]);
        }
    }
    return b;
}
var a=[1,2,1,3,4,3,5,2,5,6,3];
console.log(duplicate(a));