function arraySum(myArray) {
        let somme = 0;
        console.log(myArray.length);

        for (let i = 0; i < myArray.length; i++) {
                somme = somme + myArray[i]
        }
        return somme
}


console.log(arraySum([6, 2, 3])) ; 
// affiche 11

console.log(arraySum([7, 6, -5, 2])) ; 
// affiche 10

console.log(arraySum([8])) ;
// affiche 8

console.log(arraySum([])) ; 
// affiche 0