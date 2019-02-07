function reverse(arr) {
var i = 0;
    while (i < arr.length - 1) {
      arr.splice(i, 0, arr.pop());
      i++;
    }
    return arr;
  }
var arr = [1, 2, 3];
console.log(reverse(arr));