function removeCapitals(myArray) {
        let result = []
        for (let i = 0; i < myArray.length; i++) {
                if (myArray[i] !== myArray[i].toUpperCase() ) {
                        result.push(myArray[i])
                }
        }
        console.log(result);
}

removeCapitals("fOrEver") ; // 'frver'.
removeCapitals("raiNCoat") ; // "raioat".
removeCapitals("clr Door") ; // "clr oor