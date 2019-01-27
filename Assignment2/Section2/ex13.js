function is_leap(year){
    if ((year%4)==0){
        if ((year%100) ==0){
            if ((year%400) ==0){
                return "leap";
            }
            else{
                return "not a leap";
            }
        }
        else{
            return "leap";
        }
    }
    else{
        return "not a leap";
    }
    return "not a leap";
}
console.log(is_leap(2009));