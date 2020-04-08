/* DIRECTIONS

We need to sum big numbers and we require your help.

Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

Example
add("123", "321"); -> "444"
add("11", "99");   -> "110"
Notes
The input numbers are big.
The input is a string of only digits
The numbers are positives
ALGORITHMS MATHEMATICS NUMBERS BIGINTEGERS INTEGERS

*/

function add(a, b) {

    let sum = 0;
        if(a.length > 10 || b.length > 10){
            let bigA = BigInt(a)
            let bigB = BigInt(b)
            sum = bigA + bigB 
        } else {
            sum = parseInt(a) + parseInt(b)
     }
    return sum.toString();
}

