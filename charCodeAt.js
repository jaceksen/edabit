
str = "Jacek Seń";
str1 = "to be or not to be!";

const asciiCapitalize = (str) => {

    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        console.log(str[i]);
        console.log(str.charCodeAt(i));
        const par = str.charCodeAt(i);
        let lit = '';
        if (par % 2 === 0) {
            lit = str[i].toUpperCase();
            console.log('lit', lit);
            newStr = newStr.concat(lit);
        } else {
            lit = str[i].toLowerCase();
            console.log('lit', lit);
            newStr = newStr.concat(lit);
        }
    }
    console.log('ns: ', newStr);

}

asciiCapitalize(str1);


const asciiCapitalize2 = s => 
	[...s].map(x => x.charCodeAt(0)%2 ? x.toLowerCase(): x.toUpperCase()).join("")