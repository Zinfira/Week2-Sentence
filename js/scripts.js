// var sentence = function(word1) {
//   return word1;
// };

// var word1 = prompt("Enter the sentence:");
// var result = word1;

// alert(result);

var sentence2 = function(word2) {
  alert(word2 + newResult);
}

var word2 = prompt("Enter the sentence:");

// var result2 = word2.(charAt(0));
var firstLetter = word2.charAt(0);
var lastLetter = word2.charAt(word2.length-1);
var newResult = firstLetter.toUpperCase() + lastLetter.toUpperCase();
var word3 = newResult.split("").reverse().join("");
var word4 = word2 + word3;

alert(newResult);
alert(word2);
alert(word3);
alert(word4);