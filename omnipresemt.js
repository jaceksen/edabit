const isOmnipresent = (arr, val) => {
    const contains = (smallArr) => smallArr.includes(val);
    console.log(arr);
    console.log(arr.every(contains));
}

// isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1) ➞ true
// isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6) ➞ false
// isOmnipresent([[5], [5], [5], [6, 5]], 5) ➞ true
// isOmnipresent([[5], [5], [5], [6, 5]], 6) ➞ false


isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1);

isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6)

isOmnipresent = (a,v) => a.every(l => l.includes(v))