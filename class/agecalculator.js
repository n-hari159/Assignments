function ageCal() {
    var birth_Date = document.getElementById('birth_date').value;
    var d = new Date(birth_Date);
    var b_date = birth_Date.toString();
    var year = parseInt(b_date.substring(0, 4), 10);
    var month = parseInt(b_date.substring(5, 7), 10);
    var day = parseInt(b_date.substring(8, 10), 10);
    var today = new Date();
    var birthday = new Date(year, month - 1, day);
    var differenceInMilisecond = today.valueOf() - birthday.valueOf();

    var fyear = Math.floor(differenceInMilisecond / 31536000000);

    var fday = Math.floor((differenceInMilisecond % 31536000000) / 86400000);
    fday = fday % 30;

    var fmonth = Math.floor(fday / 30);

    document.getElementById("age").innerHTML = fyear + " years " + fmonth + " months " + fday + " days";
}