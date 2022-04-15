function objectAdd(myObj1, myObj2) {
        let myNewObject = {
                ...myObj1,
                ...myObj2
        }

        for (const i in myObj1) {

                for (const j in myObj2) {

                        if (i === j) {
                                console.log(i, j);
                                myNewObject[i] = myObj1[i] + myObj2[i]
                        }
                }
        }

        return myNewObject
}

let obj1 = { x : 3, y : 10} ;
let obj2 = { y : 2, x : 1} ;
console.log(objectAdd(obj1, obj2)) ; // { x : 4, y : 12 }
let obj3 = { a : 3, b : 2, c : -1} ;
let obj4 = { b : 5, c : 1, e : 4} ;
console.log(objectAdd(obj3, obj4)) ; // { a : 3, b : 7, c : 0, e : 4}