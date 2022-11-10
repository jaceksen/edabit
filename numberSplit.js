const numberSplit2 = (n) => {
    const n1 = Math.floor(n/2);
    const n2 = Math.ceil(n/2);
    console.log(n1);
    console.log(n2);
}

numberSplit2(-9);

const numberSplit = (n) => [Math.floor(n/2), Math.ceil(n/2)] 

console.log(numberSplit(-9));