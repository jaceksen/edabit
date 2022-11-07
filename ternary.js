
const por = (f,g) => {
    let wyn;
    let floc = f();
    let gloc = g();
    if (floc > gloc) { wyn = 'f'};
    if (gloc > floc) {wyn = 'g'};
    if (floc === gloc) {wyn = 'neither'};
    return wyn;
}

const por2= (f,g) => {
    let wyn;
    if (f() > g()) { wyn = 'f'};
    if (g() > f()) {wyn = 'g'};
    if (f() === g()) {wyn = 'neither'};
    return wyn;
}

function whichIsLarger(f, g) {
	return f()>g()?'f':g()>f()?'g':'neither'
}

console.log(por2(() => 10, () => 10));
console.log(whichIsLarger(() => 10, () => 10));


let num = 10;
console.log(num.toString())
console.log(num.toString(2))