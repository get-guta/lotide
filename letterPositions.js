const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = function(sentence) {
  
  const  result= {};
  
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];
    if(char !== " "){
      if(result[char]){
        result[char].push(i);
      }else{
        result[char] = [i];
      }

    }
  }

  return result;
};

assertArraysEqual(letterPositions("hello").l, [2, 3]);