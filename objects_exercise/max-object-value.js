function maxObjectValue(myObject) {
        let myArray = []
        let maxNumber = 0
        let maxIndex
        for (const i in myObject) {
                console.log(i, myObject[i]);

                if (maxNumber < myObject[i]) {
                        maxNumber = myObject[i]
                        maxIndex = i
                }
        }

        myArray.push(maxIndex)
        myArray.push(maxNumber)

        return  myArray
}


console.log(maxObjectValue({ a : 5, b : 2, c : 6, d : 7, e : 4 })) ; // ['d', 7]
console.log(maxObjectValue({ litchi : 11, ramboutan : 13, papaye : 9 })) ; // ['ramboutan', 13]