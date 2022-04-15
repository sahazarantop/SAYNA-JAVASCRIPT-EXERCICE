function keyPair(test1 , test2 ,test3) {
        let myArray = []
        myArray.push(test1[test3])
        myArray.push(test2[test3])
        return myArray
}

let cat1 = { name : "jinkee", breed : "calico" } ;
let cat2 = { name : "garfield", breed : "red tabby" } ;

console.log(keyPair(cat1, cat2, "breed")) ;


let sport1 = { nom : "volleyball", team : true } ;
let sport2 = { nom : "golf", team : false } ;
console.log(keyPair(sport1, sport2, "team")) ;