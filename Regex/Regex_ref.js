	// regex101.com
	https://swtch.com/~rsc/regexp/regexp1.html
		 

In JS Regex:

	var string1="the hacking school";
	var regex=/^hacking /;
	console.log(regex.test(string1));	//it is going to search hacking word in the given string


^the hacking school - starts with
the hacking school$ - ends with
^the hacking school$ - start and ends with


Boundaries : \b \b It extracts words from string


Regex Modes :  

/regex/g (Global) - It will match all occurences and standard mode will search for first occurence only from left to right


Case Insensitive Mode : /regex/i
-By default regex search for case sensitive 



Singline : /regex/s
Multiline : /regex/m

Meta characters : ? , ( , ) . (except new line it matches everything)

Search for URL : https://www.google.com

\d - matching al the numbers in text

\D - matching everything except numbers

\w -  matching a-z A-Z 0-9_ word characters and underscore

\W -  matches any non-word character opposite to \w


\s - matches all white spaces

\S - opposite to \s


the dot . metacharacter : matches all except new line
. matches only one character

jar aar far .ar search for .ar

file1 file2 file3 file4 (search for file.)

Match of file with .txt extensions ( conflict with file.txt)

If matching only file.txt use \




::: CHARACTER SETS ::::

[bc]at      cat bat homeat jat hat 

[12]7
201[1234] 

:: CHARACTER RANGES ::

[start-end] hyphen

a is an alphabet
b is an alphabet
c is an alphabet
d is an alphabet [a-d]is an alphabet
[A-Za-z]
[0-9]
file[^123]
file
a[^b] except b


:: Quantifiers ::

color
colour [\colou?r\] ?(make it optional )

January
Jan 
Jan(uary)?


March 11th
March 11
Mar 11th
Mar 11 (write a regex)



*(multiple times)
o
ok
okkk
okkkkk (ok*)



1word
22word
333word
444444word
word (write a regex)



file.html
file1.html
file2.html
file3.html  (write regex match all file\d*\.html)



+(Atleast once)
o
ok
okkk
okkkkk (ok+)