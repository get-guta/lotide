let strArray = process.argv.slice(2);

let wrd = [];
const reverse = function(str) {
  let reverseWord = [];
  for( let i = 0; i <= str.length-1; i++){
    wrd = str[i];
    let newStr = "";
  for(let j = wrd.length - 1; j >= 0; j--){
      newStr += wrd[j];

    }
   reverseWord.push(newStr);
  }
   return reverseWord;
  
};
console.log(reverse(strArray));