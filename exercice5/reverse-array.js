function reverseArray(params) {

        myArray = []

        for (let i = params.length - 1 ; 0 <= i; i--) {
                myArray[params.length - (i+1)] = params[i]
        }
        
        return myArray

        // ou 
        // return params.reverse() 
}


console.log(reverseArray(["Four", "Five", "Six", "Seven"])) ; // ['Seven', 'Six', 'Five', 'Four']


console.log(reverseArray([6, 1, 7])) ; // [7, 1, 6]