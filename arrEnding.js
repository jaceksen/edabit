const arr = ['jed', 'dwa', 'trzy'];

const f = (arr, konc) => {
    const newArr = [];

    arr.forEach(elem => {
        newArr.push(elem + konc);
    })
    return newArr;
}

console.log(f(arr,'en'));
