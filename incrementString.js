/* INSTRUCTIONS
Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1
foobar23 -> foobar24
foo0042 -> foo0043
foo9 -> foo10
foo099 -> foo100. <-----------

Attention: If the number has leading zeros the amount of digits should be considered.

FUNDAMENTALS REGULAR EXPRESSIONS DECLARATIVE PROGRAMMING ADVANCED LANGUAGE FEATURES STRINGS PARSING ALGORITHMS
*/


function incrementString(str){
    //create useful variables; empty string to store the incremented one, newArr to hold array-version of input, 
    //a stringified-number arr and empty arr
    let newStr = '';
    let newArr = str.split('');
    let numArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    let empty = [];
    //check if last char is number, if so, go through the array from last to first putting nums in their own arr
    if(numArr.includes(newArr[newArr.length-1])){
      for(let i = newArr.length - 1; i >= 0; i--){
        if(numArr.includes(newArr[i])){
          empty.push(newArr[i]);
        }
      }
      let size = empty.length;
      let newEnd = parseInt(empty.reverse().join('')) + 1;
      let count = newEnd.toString().length;
      let old = (newArr.slice(0, newArr.length - size));
      //deal with leading zeros
        if(size === count){    
          newStr = old.join('').concat(newEnd)
        }else{
          let amtZeros = size - count;
          let temp = [];
          while(amtZeros > 0) {
            temp.push('0');
            amtZeros --;
          }
          numEnd = temp.concat(newEnd)
          newStr = old.concat(numEnd).join('')
        }
        // if last char is letter, add a '1' and be done
    }else{
        newArr.push('1')
        newStr = newArr.join('')
      }
      return newStr;
    }