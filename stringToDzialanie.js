const isTrue = (relation) => {
    // const pos = relation.includes('=') ? relation.indexOf('=')
    //     : relation.includes('>') ? relation.indexOf('>')
    //     : relation.includes('<') ? relation.indexOf('<') 
    //     : null
    // console.log('pos', pos);

    // return relation.includes('=') ? (relation.split('=')[0]) === (relation.split('=')[1])
    //     : relation.includes('>') ? (relation.split('>')[0]) > (relation.split('>')[1])
    //         : relation.includes('<') ? (relation.split('<')[0]) < (relation.split('<')[1])
    //             : false 
    // console.log('char', char);
    // tab = relation.split(char);
    // console.log(tab);
    
    let wyn = ''
    relation.includes('=') ? wyn = relation.split('=')[0] : false

    console.log(wyn);

    // let wyn = relation.includes('=') ? relation.split('=')[0] === relation.split('=')[1]
    //     : relation.includes('>') ? relation.split('=')[0] > relation.split('=')[1]
    //         : relation.includes('<') ? relation.split('=')[0] < relation.split('=')[1]
    //             : false
    // console.log('wyn', wyn);
    // return wyn;
}


console.log(isTrue('15>4'));

// console.log(eval('2=2'));

function isTrue(relation) {
	return eval(relation.replace('=', '==='))
}

isTrue=r=>eval(r.replace(/=/g,'=='))