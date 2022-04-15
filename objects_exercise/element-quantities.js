function elementQuantities(myObject) {
        let myArray = []
        let myIndex

        for (const i in myObject) {
                console.log(i, myObject[i]);

                for (let j = 0; j < myObject[i]; j++) {
                        console.log(myObject[i]);

                        myArray.push(i)
                }
        }
        
        return myArray
}




let quantities1 = { cat : 3, oiseau : 1, chien : 2 } ;
console.log(elementQuantities(quantities1)) ; // ['cat', 'cat', 'chat', 'oiseau', 'chien', 'chien']
let quantities2 = { blue : 3, marron : 1 } ;
console.log(elementQuantities(quantities2)) ; // ['blue', 'blue', 'blue', 'brown']