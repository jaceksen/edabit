const fixImport = (s) => {
	let [a,b,c,d]=s.split(' ')
	return `${c} ${d} ${a} ${b}`
}


function fixImport(s) {
	const [a, b, c, d] = s.split(" ")
	return [c, d, a ,b].join(" ")
}


