
const fn1 = () => {
    fn1();
}

// fn1();
// RangeError: Maximum call stack size exceeded

function recursionPattern(num) {
    // base case
    if (num <= 0) {
        return 0
    } else {
        // recursion execution
        console.log('num', num);
        return recursionPattern(num - 1)
    }
}

// recursionPattern(5)


function factorialSum(num2) {
    if (num2 <= 0) {
        return 0
    } else {
        console.log('num2', num2);
        const factSum = factorialSum(num2 -1);
        console.log('factSum', factSum);
        const val = num2 + factSum;
        console.log('val', val);
        return val; 
    }
}

factorialSum(5)
// returns 15