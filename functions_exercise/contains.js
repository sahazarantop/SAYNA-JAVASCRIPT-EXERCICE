function contains(mystring1, mystring2) {
        let text = mystring1.toLowerCase()
        console.log(text);

        return text.includes(mystring2)
}


console.log(contains("caterpillar", "pill")) ; // true
console.log(contains("lion's share", "on")) ; // true
console.log(contains("SORRY", "or")) ; // true
console.log(contains("tangent", "gem")) ; // false
console.log(contains("clock", "ok")) ; // false