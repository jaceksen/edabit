const arr1 = [7, 3, 5, 1];

console.log(arr1);

const nthSmallest1 = (arr, n) => {
    arr2 = [...arr];
    arr2.sort((a, b) => a - b)
    console.log(arr1);
    console.log(arr2);
    console.log(arr2[n - 1]);
    return arr2[n - 1] ? arr2[n - 1] : null;
}

// nthSmallest(arr1,5);
console.log(nthSmallest1(arr1, 2));

// const nthSmallest = (arr, n) => {
//     arr1.sort((a, b) => a - b)
//     return arr1[n - 1] ? arr1[n - 1] : null;
// }

// console.log(nthSmallest(arr1, 2));