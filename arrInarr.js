const arr1 = [20, 30];
const arr2 = [4, 5, 7];

console.log(arr1[0])

const tuckIn = (arr1, arr2) => [arr1[0], ...arr2, arr1[1]];

console.log(tuckIn(arr1, arr2))
