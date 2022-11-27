const match2 = (s1, s2) => {
    // const regex = /s2*/i;
    const regex2 = new RegExp(s2,'i')
    const wyn = regex2.test(s1);
    return wyn;
}

const match = (s1, s2) => s1.toLowerCase() === s2.toLowerCase();

console.log(match('HeLlo', 'HELLO'));