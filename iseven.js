// def is_even2(n):
// 	return n % 2 == 0

const iseven = (n)  => n % 2 == 0

console.log(iseven(6));

arr1 = [8,12];
arr2 = [1,2,3,4,5];

// console.log('inc', arr2.includes(444));

// const czyJest = (curVal) => arr2.includes(curVal);
const notShare = (arr1,arr2) => {
    const czyJest = (curVal) => arr2.includes(curVal);
    // console.log('cj', czyJest());
    console.log('wyn', !arr1.some(czyJest));
    // arr1.forEach(element => {
    //     const aa = czyJest(element);
    //     console.log('aa', aa);
    // });
}

notShare(arr1, arr2);


const notShare2 = (arr1,arr2) => {
    const czyJest = (curVal) => arr2.includes(curVal);
    return !arr1.some(czyJest);
}

notShare = (a, b) => a.every(x => !b.includes(x));