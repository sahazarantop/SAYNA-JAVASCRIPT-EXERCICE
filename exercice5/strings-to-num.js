function stringsToNum(myArray) {
        let chaine = []

        for (let i = 0; i < myArray.length; i++) {
                chaine[i] = myArray[i].length ;

        }
        return chaine
}

console.log(stringsToNum([ "orange", "game", "movie","beau"])) ; // [6, 4, 5, 9]

console.log(stringsToNum(["he", "off", "handmade"])) ; // [2, 3, 8]