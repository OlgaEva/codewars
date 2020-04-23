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
  


  /*
  function add(str1, str2) {

    let sum = "";  // our result will be stored in a string.

    // we'll need these in the program many times.
    let str1Length = str1.length;
    let str2Length = str2.length;

    // if s2 is longer than s1, swap them.
    if(str2Length > str1Length ){
        let temp = str2;
        str2 = str1;
        str1 = temp;
    }

    let carry = 0;  // number that is carried to next decimal place, initially zero.
    let a;
    let b;
    let temp;
    let digitSum;
    for (let i = 0; i < str1.length; i++) {
        a = parseInt(str1.charAt(str1.length - 1 - i));      // get ith digit of str1 from right, we store it in a
        b = parseInt(str2.charAt(str2.length - 1 - i));      // get ith digit of str2 from right, we store it in b
        b = (b) ? b : 0;                                    // make sure b is a number, (this is useful in case, str2 is shorter than str1
        temp = (carry + a + b).toString();                  // add a and b along with carry, store it in a temp string.
        digitSum = temp.charAt(temp.length - 1);            //
        carry = parseInt(temp.substr(0, temp.length - 1));  // split the string into carry and digitSum ( least significant digit of abSum.
        carry = (carry) ? carry : 0;                        // if carry is not number, make it zero.

        sum = (i === str1.length - 1) ? temp + sum : digitSum + sum;  // append digitSum to 'sum'. If we reach leftmost digit, append abSum which includes carry too.

    }

    return sum;     // return sum

}
*/