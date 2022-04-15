function divByEither(num1, num2, max){
        let x = 0
        let myArray = []
        if (num1 > num2) {
                x = num1
                num1 = num2
                num2 = x
        }
        console.log(num1 , num2);

        for (let i = num1; i < max; i++) {
                if ((i % num1 === 0) || (i % num2 === 0)) {
                        myArray.push(i)
                }
        }
        console.log(myArray); 
}

divByEither(4, 3, 16) ;
divByEither(7, 5, 20) ;