const addNums = (numery) => {
    arr = numery.split(', ');
    console.log(arr)
    const arr2 = [];
    arr.forEach(elem => arr2.push(Number(elem)));
    console.log(arr2);
    return arr2.reduce((total, num) => total + num);
}

console.log(addNums("2, 5, 1, 8, 4"));

function addNums(nums) {
	return nums.split(', ').reduce((a, b) => a + +b, 0);
}