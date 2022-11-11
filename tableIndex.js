const arr1 = [0,1,2,3,4];

const addIndexes = (arr) => {
    arrret = [];
    arr.forEach((elem,ind) => {
        // console.log(`elemIdx: ${elem} ${ind}`);
        arrret.push(Number(elem) + ind);
    })
    // console.log('arrret', arrret);
    return arrret;
}

addIndexes(arr1);


const addIndexes2 = arr => arr.map((n,i) => n + i);