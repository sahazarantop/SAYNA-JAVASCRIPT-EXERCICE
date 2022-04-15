function fizzBuzz(myNumber) {
        for (let i = 1; i <= myNumber; i++) {
                if ((i % 5 === 0) || (i % 3 === 0)){
                        console.log(i);
                        if (!((i % 5 === 0) && (i % 3 === 0)))  {
                                console.log(i);
                        }
                }
        }
}


fizzBuzz(18)
fizzBuzz(33) 