// Sum Strings as numbers

// Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:

// sumStrings('1','2') // => '3'
// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

// ALGORITHMS STRINGS ARITHMETIC MATHEMATICS NUMBERS BIG INTEGERS INTEGERS UTILITIES

// function sumStrings(a, b) {
//   const summedUp = parseInt(a) + parseInt(b);

//   return summedUp.toString();
// }

// // sumStrings("4", "7")
// sumStrings("11", "9")


function sumStrings(a, b){

    let summedUp = ''
    if(a===''){
      summedUp = 0 + parseInt(b);
    } else if(b===''){
      summedUp = parseInt(a) + 0;
    } else if(a>=BigInt(Number.MAX_SAFE_INTEGER) || b>=BigInt(Number.MAX_SAFE_INTEGER)){
      // console.log("a or b, one of them is big")
      summedUp = BigInt(a) + BigInt(b);
    } else{
      summedUp = parseInt(a) + parseInt(b);
    }
    return summedUp.toString();
  }
  
  // sumStrings("", "9")
  
  // sumStrings('712569312664357328695151392', '8100824045303269669937')
  
  //  Expected: '712577413488402631964821329', instead got: '7.125774134884027e+26'
//   sumStrings('50095301248058391139327916261', '81055900096023504197206408605') 
  
  // - Expected: '131151201344081895336534324866', instead got: '1.3115120134408189e+29'