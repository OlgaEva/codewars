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

function orderWeight(strng) {
  //Step 1: convert ordered weight string into array
let weightedArr = strng.split(' ');
//Step 2: convert array of strings into array of numbers
let newElemsArr = []

for(let char of weightedArr){
  newElemsArr.push(parseInt(char))
}
//Step 3: find out the "weight" of each array elem & create object where keys are elems and values are their weights
let weightedPairs = [];

for(i=0; i<newElemsArr.length; i++){
 let obj = {};
 let n = "n";
 let w = "w";
 let sn = "sn";

 var num = newElemsArr[i];
 var sum = ('' + num).split('').reduce(function (sum, val) {
return sum + +val }, 0)

 obj[n] = newElemsArr[i];
 obj[w] = sum;
 obj[sn] = newElemsArr[i].toString();

weightedPairs.push(obj)
}

weightedPairs.sort(function(a,b) {
if(a.w < b.w || a.w == b.w && a.sn < b.sn) {
  return -1;
}else{return 1;}
})

let newArr = []
for(i=0; i<weightedPairs.length;i++){
newArr.push(weightedPairs[i]["n"])
}

return newArr.join(' ').toString();
}


/*

when I clicked attempt on CW, my function was failing 1/57 tests in the test suite which stated
expected ' ' and received NaN; so I added an if/else statement to handle that case 
*/

// function orderWeight(strgn){
// if(strng == ''){
//   return ''
// } else {
//     //Step 1: convert ordered weight string into array
//     let weightedArr = strng.split(' ');
//     //Step 2: convert array of strings into array of numbers
//     let newElemsArr = []

//     for(let char of weightedArr){
//         newElemsArr.push(parseInt(char))
//     }
//     //Step 3: find out the "weight" of each array elem & create object where keys are elems and values are their weights
//     let weightedPairs = [];

//     for(i=0; i<newElemsArr.length; i++){
//       let obj = {};
//       let n = "n";
//       let w = "w";
//       let sn = "sn";

//       var num = newElemsArr[i];
//       var sum = ('' + num).split('').reduce(function (sum, val) {
//     return sum + +val }, 0)

//       obj[n] = newElemsArr[i];
//       obj[w] = sum;
//       obj[sn] = newElemsArr[i].toString();
  
//       weightedPairs.push(obj)
//     }

//     weightedPairs.sort(function(a,b) {
//       if(a.w < b.w || a.w == b.w && a.sn < b.sn) {
//         return -1;
//       }else{return 1;}
//     })

//     let newArr = []
//     for(i=0; i<weightedPairs.length;i++){
//       newArr.push(weightedPairs[i]["n"])
//     }

//     return newArr.join(' ').toString();
// }
// }