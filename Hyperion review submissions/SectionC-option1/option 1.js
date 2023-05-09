//sayNumber function takes a number N as an argument and converts it into its verbal representation.
//The function uses a series of arrays (ones, teens, tens, parts) to build the words corresponding to the input number.
// It splits the number into groups of three digits, starting from the right, and converts each group into words using the arrays.
// The function then concatenates the words, adding appropriate separators like commas and spaces.
// It handles special cases for numbers below 100 and includes support for up to trillions.
// The code also exports the sayNumber function for use outside the module.

const sayNumber = N => N == 0 ? `Zero.` : ([...((m = (N+``)[`length`]) % 3 ? `0`.repeat(3 - (m % 3)) : ``) + N+``]
        .reduce((A,_,i,P) => (p = P.slice(3*i,3*i+3).join().replace(/,/g,``)) ? [...A, p] : A, []).reverse()
        .reduceRight((W,e,i,T) => (w = numericToWords(e,i)) ? [...W, i < T[`length`]-1 ? w : w.slice(0,1)
            .toUpperCase() + w.slice(1)] : W, []).join(`, `).trim() + `.`).replace(/,\s(\w+\-)?(\w+)\./g, ` and $1$2.`),
    ones = [``,`one`,`two`,`three`,`four`,`five`,`six`,`seven`,`eight`,`nine`],
    teens = [`ten`,`eleven`,`twelve`,`thirteen`,`fourteen`,`fifteen`,`sixteen`,`seventeen`,`eighteen`,`nineteen`],
    tens = [,,`twenty`,`thirty`,`forty`,`fifty`,`sixty`,`seventy`,`eighty`,`ninety`],
    parts = [``,`thousand`,`million`,`billion`,`trillion`], [SPACE, EMPTY] = [` `, ``],
    numericToWords = (num,pos) => {
        if (+num === 0) return EMPTY;
        let [words, cN, n] = [EMPTY, -1, [...(+num)+EMPTY]]
        switch (n[`length`]) {
            case 3: cN = +n.splice(0,1);
                words += ones[cN] + ` hundred ` + (+num % 100 ? `and `: EMPTY);
            case 2: cN = +n.splice(0,1);
                if (cN > 1) { words += tens[cN] + (+n ? `-` : SPACE); if (+n === 0) break; }
                else { if (cN === 1) { words += teens[+n] + SPACE; break; } }
            case 1: words += ones[+n] + SPACE }
        return words += parts[pos] }
console.log(sayNumber(115))
console.log(sayNumber(11111))

module.exports = sayNumber