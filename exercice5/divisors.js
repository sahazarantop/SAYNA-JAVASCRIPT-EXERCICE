function divisors(myNumber) {
        myArray = []

        for (let i = 1; i <= myNumber; i++) {
                testDivisors = myNumber % i ; 
                if (testDivisors === 0) {
                        myArray.push(i)
                }
        }
        
        console.log(myArray)
        return myArray
}

console.log(divisors(15)) ; // [1, 3, 5, 15].

console.log(divisors(7)) ; // [1, 7] (en anglais)

console.log(divisors(24)) ; // [1, 2, 3, 4, 6, 8, 12, 24]