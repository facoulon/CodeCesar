var alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var shift = 5;
var word = "bonjour";
var wordEncode = "";

for (var i = 0; i < word.length; i++) {
   var LetterIndex = alpha.indexOf(word[i])
   var newLetterIndex = LetterIndex + shift;
   newLetterIndex %= 26;
   var newLetter = alpha[newLetterIndex];
   wordEncode += newLetter;
}
console.log(word , wordEncode);
