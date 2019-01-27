function quad(a,b,c){
    var d=Math.sqrt((b*b)-(4*a*c));
    var e=(2*a);
    var f=((-b+d)/e);
    var g=((-b-d)/e);
    console.log("First"+f);
    console.log("Second"+g);
}
quad(1,4,4);