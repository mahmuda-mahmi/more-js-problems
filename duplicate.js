// remove duplicate names
const names = ['abul', 'babul', 'cabul', 'dabul', 'ebul', 'fabul', 'babul', 'abul', 'ebul', 'babul', 'abul', 'ebul']

function removeDuplicate(names){
     const unique = [];
     // for(let i=0; i< names.length; i++){
     //      const element = names[i];
     //      // console.log(element);
     // }
     for(const element of names){
          console.log(element);
          if(unique.indexOf(element) == -1){
               unique.push(element);
          }
     }
     return unique;
}
const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);

// remove duplicate numbers
const nums = [34, 12, 67, 65, 19, 34, 67, 65, 12, 56, 19, 56, 17, 98, 98, 17];

function removeDuplicate(nums) {
     const unique = [];
     for (const element of nums) {
          // console.log(element)
          if (unique.indexOf(element) == -1) {
               unique.push(element);
          }
     }
     return unique;
}
const uniqueNums = removeDuplicate(nums);
console.log(uniqueNums);

// find even-odd numbers
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
console.log(num);

// even numbers
let evens = [];
function evenNumbers(num) {
     for (const element of num) {
          if (evens.indexOf(element) == -1 && element % 2 == 0) {
               evens.push(element);
          }
     }
     return evens;
}
const evenNums = evenNumbers(num);
console.log('Even numbers are:', evenNums);

// odd numbers
let odds = [];
function oddNumbers(num) {
     for (const element of num) {
          if (odds.indexOf(element) == -1 && element % 2 == 1)
               odds.push(element);
     }
     return odds;
}
const oddNums = oddNumbers(num);
console.log('Odd numbers are:', oddNums);