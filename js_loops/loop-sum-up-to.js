function sumUpTo(params) {
        let sum = 0
        for (let i = 0; i <= params; i++) {
                sum = sum + i ;
        }
        return sum;
}

console.log(sumUpTo(4)) ; // 10
console.log(sumUpTo(5)) ; // 15
console.log(sumUpTo(2)) ; // 3