/*
                                                             
  Alphabet Soup                                                                       
  Have the function AlphabetSoup(str) take the str string parameter being passed      
  and return the string with the letters in alphabetical order                        
  (ie. hello becomes ehllo). Assume numbers and punctuation symbols will not be       
  included in the string.                                                             
                                                                                      
*/

function alphabetSoup(str) {
  return Array.from(str).sort().join("");
}

console.log(alphabetSoup("hello")); // ehllo
console.log(alphabetSoup("donut")); // ehllo
console.log(alphabetSoup("macbook pro")); // abckmooopr
