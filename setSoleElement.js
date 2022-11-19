const first = new Set();
first.add(1); 
// elementSet(first) ➞ 1

const second = new Set();
second.add("apple"); 
// elementSet(second) ➞ "apple"

const third  = new Set();
third.add(false); 
// elementSet(third) ➞ false

const elementSet2 = (s) => {
 const arr =  Array.from(s);
 return arr[0];	
}

const elementSet = (s) => Array.from(s)[0];

console.log(first);
console.log(elementSet(second));