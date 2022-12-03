arr1 = ['aa', 'cccccc', 'd', 'mm'];

const sortByLength = (arr) => arr.sort((a, b) => a.length - b.length) 

// function sortByLength(arr) {
//     return arr.sort((a, b) => a.lenght - b.lenght);
// }

// arr.sort(function(a, b){
//   // ASC  -> a.length - b.length
//   // DESC -> b.length - a.length
//   return b.length - a.length;
// });

// arr2 = sortByLength(['aaa', 'v']);

console.log(sortByLength(arr1))
