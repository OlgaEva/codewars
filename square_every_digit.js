/* Square Every Digit
Welcome. In this kata, you are asked to square every digit of a number.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer

FUNDAMENTALS    MATHEMATICS ALGORITHMS  LOGIC   NUMBERS */

function squareEveryDigit(num) {
    let stringed = JSON.stringify(num)
    let into_arr = stringed.split('')
    let new_arr = []
        for (let chars of into_arr){
            new_arr.push(parseInt(chars) * parseInt(chars))
        }; 
    return new_arr.join('')
};

// squareEveryDigit(234);