const arr = [3, null, 4, null, 6];

const removeNull1 = (arr) =>  arr.filter(item => item !== null)
const removeNull = (arr) =>  arr.filter(item => item)

console.log(removeNull(arr));
    
	