function myPi2(n) {
 	const pi = Math.PI;
    return parseFloat(pi).toFixed(n);
}

const myPi = (n) => parseFloat(Math.PI).toFixed(n);

console.log(myPi(20));