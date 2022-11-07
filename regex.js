const str = 'asdf fjla 34:23 asfasd 432:434 ddd';
const myreg = /[0-9][0-9]:[0-9][0-9]/;
const myreg2 = /\d{2}\:\d{2}/;
console.log(str.match(myreg));
console.log('reg2', str.match(myreg2));


