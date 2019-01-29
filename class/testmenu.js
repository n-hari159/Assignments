/* var i,a,b,c;
do{
i=prompt("Enter a value 0 for add 1 for sub 2 for mul and 3 for div");
a=Number(prompt("Enter values a"));
b=Number(prompt("Enter Value b"));
if(i==0){ c=a+b; alert(c);}
else if(i==1){ c=a-b; alert(c);}
else if(i==2){ c=a*b; alert(c);}
else if(i==3){ c=a/b; alert(c);}
else { alert("Not Valid"); break;}
}while(i<4); */

var a,b,c;
a=Number(prompt("Enter values a"));
b=Number(prompt("Enter Value b"));
switch (prompt("Enter 0 for add 1 for sun 2 for mul and 3 for div")) { 
    case "0":
    c=a+b;
    alert(c);
    break;
    case "1":
    c=a-b;
    alert(c);
    break;
    case "2":
    c=a*b;
    alert(c);
    break;
    case "3":
    c=a/b;
    alert(c);
    break;
    default:
    alert("Not Valid");
    break;
}