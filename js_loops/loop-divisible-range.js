function divisibleRange(min, max, num) {
        let myArray = []

        for (let i = min; i < max; i++) {
                if (i % num === 0) {
                        myArray.push(i)
                }
        }

        console.log(myArray);
}

divisibleRange(17, 40, 9) ;
divisibleRange(10, 24, 4) ;

