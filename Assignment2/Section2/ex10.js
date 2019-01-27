function vowel(t2){
    //var t1='I';
    //var t2=t1.toLowercase();
    //if (a>= 'A' && a<= 'Z'){
    //   a= a+32;
    //}
    if ((t2=='a'|| t2=='e' || t2=='i' || t2=='o' || t2=='u')||(t2=='A'|| t2=='E' || t2=='I' || t2=='O' || t2=='U')){
       return "Vowel";
    }
 return "Consonant";
}
console.log(vowel("M"));