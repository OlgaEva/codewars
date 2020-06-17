/* Directions
Next bigger number with the same digits

JavaScript
Description:

Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:
12 ==> 21
513 ==> 531
2017 ==> 2071

nextBigger(num: 12)   // returns 21
nextBigger(num: 513)  // returns 531
nextBigger(num: 2017) // returns 2071

If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift):
9 ==> -1
111 ==> -1
531 ==> -1

nextBigger(num: 9)   // returns nil
nextBigger(num: 111) // returns nil
nextBigger(num: 531) // returns nil
REFACTORING NUMBERS STRINGS INTEGERS
*/

function nextBigger(n){
    let numArr = n.toString().split('');
    let endArr = [];
    let index;
    let placeholder;
    
    for (let i = numArr.length -1; i >=0; i--) {
        if (numArr[i] > numArr[i-1]){
            index = i;
            break
        } else {
            endArr.push(numArr[i])
        }
      }
     
    if (index == undefined) {
        return -1;
    } else if (index && endArr.length == 0) {
        placeholder = numArr[index - 1];
        numArr[index - 1] = numArr[index];
        numArr[index] = placeholder;
        return parseInt(numArr.join(''));
    } else {
        function checkNum(num){
            return num > numArr[index -1 ];
        }
        if ((endArr.find(checkNum) ? 1 : false == 1) && (endArr.find(checkNum) < numArr[index])){
            for(let i = endArr.length - 1; i >= 0; i--){
                if(endArr[i] === endArr.find(checkNum)) {
                    placeholder = endArr.splice(i, 1).toString();
                    break;
                } 
            }
                endArr.push(numArr[index - 1]);
                endArr.push(numArr[index])
                endArr.sort();
                numArr[index-1] = placeholder;
                numArr.splice(index, endArr.length);
                return parseInt(numArr.concat(endArr).join(''));
             
        } else {
            placeholder = numArr[index];
            endArr.push(numArr[index - 1]);
            endArr.sort();
            numArr[index -1] = placeholder;
            numArr.splice(index, endArr.length);
            return parseInt(numArr.concat(endArr).join('')); 
        }
     }
}
    