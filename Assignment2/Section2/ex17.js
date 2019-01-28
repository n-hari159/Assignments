function triangle(a,b,c){
    var s=((a+b+c)/2);
    var d=((s-a)*(s-b)*(s-c));
    if(d<0){
        console.log("Sides does not form a triangle");
    }
    else if(d==0){
        console.log("Sides form a degenerate traingle");
    }
    else{
        if((a==b)&&(b==c)){
            console.log("Equalateral Triangle");
        }
        else if((a==b)||(b==c)||(a==c)){
            console.log("Isosceles Traingle");
        }
        else{
            console.log("Scalene Triangle");
        }
    }
}
triangle(10,20,25);