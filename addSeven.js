const jazzify2 = (arr) => {
    retArr = [];
    arr.map(elem => {
        if (!elem.endsWith(7)) {
            retArr.push(elem + '7')
        } else {
            retArr.push(elem)
        }
    })
    return retArr;
}

const jazzify = arr => arr.map(i => i.endsWith('7') ? i : i + '7');

const arr1 = ['c1', 'd7', 'asdfsda777', 'msdfa'];

console.log(jazzify(arr1));