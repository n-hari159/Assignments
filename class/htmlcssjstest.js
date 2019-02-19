//var myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';


// To change the contents of image on click
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'image1.jpeg') {
        myImage.setAttribute('src', 'image2.jpeg');
    } else {
        myImage.setAttribute('src', 'image1.jpeg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Hello, ' + myName;
}
if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hello, ' + storedName;
}
myButton.onclick = function() {
    setUserName();
}
var person = {
    name: ['Bob', 'Smith'],
    age: 32,
    gender: 'male',
    interests: ['music', 'skiing'],
    bio: function() {
        alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
    },
    greeting: function() {
        alert('Hi! I\'m ' + this.name[0] + '.');
    }
};

//Adding member names and values dynamically to object person with "[]" notation
var myDataName = 'height';
var myDataValue = '1.75m';
person[myDataName] = myDataValue;