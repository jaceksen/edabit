const evenOddString1 = (txt) => {
    arrOdd = '';
    arrEven = '';
    for (let i in txt) {
        console.log('txti', txt[i]);
        if (i%2 === 0) {
            arrEven += txt[i];
        } else {
            arrOdd += txt[i];
        }
    }
    return `${arrEven} ${arrOdd}`;
}

console.log(evenOddString1('mubashir'));

const evenOddString2 = (txt) => {
    arrOdd = '';
    arrEven = '';
    for (let i in txt) {
        console.log('txti', txt[i]);
        if (i%2 === 0) {
            arrEven += txt[i];
        } else {
            arrOdd += txt[i];
        }
    }
    return `${arrEven} ${arrOdd}`;
}

const evenOddString = s => 
[...s].filter((_, i) => !(i % 2)).join`` + ' ' + [...s].filter((_, i) =>   i % 2 ).join``   ;

console.log(evenOddString('mubashir'));
