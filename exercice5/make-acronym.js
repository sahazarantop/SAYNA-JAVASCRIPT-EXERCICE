function makeAcronym(tester) {

        tester
        test = tester[0]

        a = tester.length

        for (let i = 0; i < a; i++) {
                if (tester[i] === ' ') {
                        test  = test + tester[i+1]

                }
        }

        return test.toUpperCase() ;
}


console.log(makeAcronym("los Angeles")) ; // LA


console.log(makeAcronym("same stuff different day")) ; // SSDD


console.log(makeAcronym("Laugh out loud")) ; // LOL


console.log(makeAcronym("don't over think stuff")) ; // DOTS