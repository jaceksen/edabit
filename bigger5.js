const sumFive3 = (arr) => arr.reduce((acc, val) => {
    console.log('val', val);
    console.log('acc', acc);
    if (val > 5) {
        acc + val;
    }
    return acc;
    // val > 5 ? acc+val : 0 ,0
    // return acc;
});

function sumFive(arr) {
	return arr.reduce((acc, val) => val > 5 ? acc + val : acc, 0);
}

const sumFive2 = (arr) => arr.map((val) => {
    let sum = 0;
    console.log('val', val);
    if (val > 5) { sum += val };
    return sum;
});

console.log(sumFive([1, 5, 20, 30, 4, 9, 18]));