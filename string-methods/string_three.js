let phrase = "Let the cat out of the bag" ;
console.log(phrase[phrase.length]) ;
// ????

console.log(phrase[phrase.length - 1]) ;
//  affiche g

console.log(phrase[phrase.length - 2]) ;
// affiche a

const i = 7 ;
const char = phrase[i] ;
console.log(char) ;
// affiche " "

console.log(phrase.indexOf(char)) ;
// affiche 3

console.log(phrase.slice(2, 8)) ;
// affiche t the 

console.log("abcdefg".slice(1, 3)) ;
// affiche bc

console.log("abcdefg".slice(2)) ;
//  affiche cdefg

console.log("abcdefg".slice(4)) ;
// affiche efg

console.log("abcdefg".slice(2, -1)) ;
// affiche cdef

console.log("abcdefg".slice(2, -2)) ;
// affiche cde
