const countLetters = function (sentence) {
  //newWord = sentence.split(" ");
  const wordCount = {};
  for (let char of sentence) {
    // console.log(char);
    if(char !== " "){
      if (wordCount[char]) {
        wordCount[char] += 1;
      } else {
        wordCount[char] = 1;
      }
     }
    }
  return wordCount

};

console.log(countLetters("lighthouse in the house"));
module.exports = countLetters;