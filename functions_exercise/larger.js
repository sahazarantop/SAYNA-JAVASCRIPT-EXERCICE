function larger(number1, number2) {
        if (number1 > number2) {
                return number1
        } else{
                return number2
        }
}

console.log(larger(256, 400)) ; // 400
console.log(larger(31, 4)) ; // 31
console.log(larger(-6, 7)) ; // 7
console.log(larger(11.3, 11.2)) ; // 11.3
console.log(larger(-10, -3)) ; // -3