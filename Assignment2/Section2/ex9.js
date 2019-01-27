function arrswap(){
    var a=[1,2,3,4], b=[5,6,7,8];
    d=a.length;
    e=b.length;
    if (d==e){
        for (i=0;i<d;i++) {
            a[i] = a[i] + b[i];
            b[i] = a[i] - b[i]; 
            a[i] = a[i] - b[i];
        }
        console.log("FirstArray");
        for (i=0;i<d;i++) {
            console.log(a[i]);
        }
        console.log("SecondArray");
        for (i=0;i<e;i++) {
            console.log(b[i]);
        }
    }
}
arrswap();