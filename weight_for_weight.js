/* My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the 
weights of members is published and each month he is the last on the list which means he is the heaviest.

I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". 
It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.

For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99. Given a string 
with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?

Example:
"56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: "100 180 90 56 65 74 68 86 99"

When two numbers have the same "weight", let us class them as if they were strings (alphabetical ordering) 
and not numbers: 100 is before 180 because its "weight" (1) is less than the one of 180 (9) and 180 is before 90 since, 
having the same "weight" (9), it comes before as a string.

All numbers in the list are positive numbers and the list can be empty.

Notes
it may happen that the input string have leading, trailing whitespaces and more than a unique whitespace between 
    two consecutive numbers
Don't modify the input
For C: The result is freed.

ALGORITHMS NUMBERS
*/

function weightForWeight(str){
    //Step 1: convert ordered weight string into array
    let weightedArr = str.split(' ');
    //Step 2: convert array of strings into array of numbers
    let newElemsArr = []

    for(let char of weightedArr){
        newElemsArr.push(parseInt(char))
    }
     //Step 3: find out the "weight" of each array elem & create object where keys are elems and values are their weights
     let weightedDic = {}
     for(i=0; i<newElemsArr.length; i++){
       var num = newElemsArr[i];
       var sum = ('' + num).split('').reduce(function (sum, val) {
     return sum + +val }, 0)
     weightedDic[newElemsArr[i]] = sum;
    }
    let keys = Object.keys(weightedDic)
    // console.log(keys)
    let values = Object.values(weightedDic)
    // console.log(values)
    let sortedVals = values.sort(sortNumber);

    function sortNumber(a,b) {
        return a - b;
    }

    let sortedArr = []
      for(i=0; i<sortedVals.length; i++){
        sortedArr.push(Object.keys(weightedDic).find(key => weightedDic[key] === sortedVals[i]));

      }
      return sortedArr.join(' ').toString();
}





// function weightForWeight(str){
//     //Step 1: convert ordered weight string into array
//   let weightedArr = str.split(' ');
// console.log(weightedArr)
//     //Step 2: convert array of strings into array of numbers
//   let newElemsArr = []

//     for(let char of weightedArr){
//         newElemsArr.push(parseInt(char))
//     }
// console.log(newElemsArr)
// console.log(typeof(newElemsArr[0]))
//     //Step 3: find out the "weight" of each array elem, create object where keys are elems and values are their weights
//     let weightedDic = {}
//       for(i=0; i<newElemsArr.length; i++){
//         var num = newElemsArr[i];
//         var sum = ('' + num).split('').reduce(function (sum, val) {
//       return sum + +val }, 0)
//       weightedDic[newElemsArr[i]] = sum;
// console.log(sum)
// console.log(weightedDic)

//     //     keys[keys.length] = key;
//     //   }
//     // let values = []
//     //   for(var i = 0; i < keys.length; i++ ) {
//     //     values[values.length] = weightedDic[keys[i]];
//       }
//       let keys = Object.keys(weightedDic)
//         console.log(keys)
//       let values = Object.values(weightedDic)
//         console.log(values)
//       let sortedVals = values.sort(sortNumber);

//       function sortNumber(a,b) {
//    return a - b;
//     }
//     console.log(sortedVals)

//     let sortedArr = []

//       console.log(Object.keys(weightedDic).find(key => weightedDic[key] === sortedVals[0]));

// }

// weightForWeight("97 100 125");