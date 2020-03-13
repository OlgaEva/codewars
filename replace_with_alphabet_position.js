/* 
Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)

FUNDAMENTALS STRINGS
*/
function alphabetPosition(text) {
  
    // Step 1: create an array with all letters of the alphabet
        let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    // Step 2: create an empty array to store the converted chars
        let newStr = []
    // Step 3: clean input text
        let cleanText = []
        let textToClean = text.toLowerCase().split('')
            for(let char of textToClean){
                if(alphabet.includes(char)){
                    cleanText.push(char)
                } else{
                }
            }
    
    // Step 4: create empty JS Object
        let alphaDic = {};
    // Step 5: fill Object with alphabet's letters as keys, and numbers representing position as values
        let counter = 1;
    
        for(let char of alphabet){
            if(!alphaDic[char]){
                alphaDic[char] = counter;
            }
            counter++;
        }
    // Step 6: go over the str input, and swtich to it's corresponding value in the alphaDic
        for(let char of cleanText){
            newStr.push(alphaDic[char]);
        }
    // Step 7: return the stringified version of newStr.join
        return newStr.join(' ');
    }