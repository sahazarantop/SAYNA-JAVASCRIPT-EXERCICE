function startsWithR(myString) {
        return (myString[0] === 'r' || myString[0] === 'R')
}

console.log(startsWithR("roger that")) ; // vrai
console.log(startsWithR("Row, row, row your boat")) ; // true
console.log(startsWithR("slip")) ; // false
console.log(startsWithR("Taxicab")) ; // false