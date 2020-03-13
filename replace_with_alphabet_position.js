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

function replaceWithAlphaPosition(){
// Step 1: create an array with all letters of the alphabet
        let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// Step 2: create a dictionary with alphabet's letters as keys, and numbers representing position as values
    let alphaDic = {};

    for(let char of alphabet){
        if(!alphaDic[char]){
            alphaDic[char] = 1;
        }else{
        }
    }
    return alphaDic;

}