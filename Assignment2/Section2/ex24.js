function swap(a,b){
    //var temp;
    //temp=a;
    //a=b;
    //b=temp;
    //console.log(a,b);
    //a=a+b;
    //b=a-b;
    //a=a-b;
    //console.log(a,b);
    a=a^b;
    b=a^b;
    a=a^b;
    console.log(a,b);
    //and so on so forth !!
}
swap(3,6);