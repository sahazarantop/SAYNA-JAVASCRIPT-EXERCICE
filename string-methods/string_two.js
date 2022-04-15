let word = "Kill two birds with one stone" ;
console.log(word[4]) ;
// affiche " "

console.log(word.length > 5 && word[0] === "d") ;
// affiche false

console.log(word.length > 5 && word[0] === "s") ;
// affiche false

console.log(word.indexOf("o") > -1) ;
// affiche true

console.log(word.indexOf("z") > -1) ;
// affiche false

let str = "foggy" ;
console.log(str[2 + 1]) ;
//  affiche g
console.log(str[str.length - 1]) ;
//  affiche y

str = "jour" ;
console.log(str) ;
//  affiche jour

console.log(str.length) ;
//  affiche 4

console.log(str.indexOf("ogg")) ;
// affiche -1
