function alpha(val){
if( (val>='a' && val<='z') || (val>='A' && val<='Z'))
        return "c is an alphabet";
    else
        return "c is not an alphabet";
}
console.log(alpha("*"));