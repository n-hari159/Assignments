/* var string="I have a pen.The pen is vry good.Do you have a pen";
var ths=/pen/ ;
console.log(ths.test(string)); */

var string="I have a pen.The pen is very good.Do you have a pen?";
var ths=/ /g ;
console.log(ths.test(string));

// g --> denotes Global(search for all instances)
// \b--> Exact match of string (Car,Cartoon) If we search for Car we get only the Car but Car in Cartoon wont be shown
// \ --> used to escape(makes the character next to it treated as normal character instead if its a special string)
// \s --> Matches all spaces but not characters and /S is opposite of it
// \w --> Matches everything from (a-z,A-Z,0-9),word characters and underscore
// . --> Matches any character except line termination but when followed by character it will match the words with that characters in it
