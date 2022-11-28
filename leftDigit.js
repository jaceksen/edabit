const leftDigit2 = (num) => {
    let wyn = [];
    [...num].map(l => {
        // console.log(l, typeof l)
        const regex = /[0-9]/;
        let isNumber = l.match(regex);
        // console.log(`${l} ${isNumber}`);
        if (isNumber !== null) {
            // console.log(l);
            wyn.push(l);
        }
    })
    return wyn[0];
}

const leftDigit3 = (num) => {
    let wyn = [];
    [...num].map(l => {
        const regex = /[0-9]/;
        let isNumber = l.match(regex);
        if (isNumber !== null) {
            wyn.push(l);
        }
    })
    return Number(wyn[0]);
}

const leftDigit4 = num => +num.match`\\d`[0];
const leftDigit = num => +num.match`\\d`;

function leftDigit5(num) {
	return +num.match(/\d/)
}

console.log(leftDigit("TrAdE2W1n95!"));