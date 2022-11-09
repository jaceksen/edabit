const whoWinsTonight2 = (totalCoins, totalSpace, availCoins, availlSpace) => {
    const billAmount = Math.floor(totalCoins/availCoins);
    console.log('bill', billAmount);
    const willAmount = Math.floor(totalSpace/availlSpace);
    console.log('will', willAmount);
    return billAmount > willAmount ? 'Bill' : billAmount === willAmount ? 'Tie' : 'Will';
}

const whoWinsTonight = (coins, space, price, size) => {
    const billAmount = Math.floor(coins/price);
    const willAmount = Math.floor(space/size);
    return billAmount > willAmount ? 'Bill' : billAmount === willAmount ? 'Tie' : 'Will';
}

console.log(whoWinsTonight(40,95,5,10));
console.log(whoWinsTonight(20,20,5,10));
console.log(whoWinsTonight(10,2,20,1));
console.log(whoWinsTonight(3,7,2,5));
