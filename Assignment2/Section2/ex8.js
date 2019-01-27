function arraysum(){
    var a=[4,5,6,7];
    var b=a.length;
    var c=0;
    for(i=0;i<b;i++){
        c+=a[i] ;  
    }
    return c;
}
console.log(arraysum());