let endsInLy = function (test) {
        return ((test[test.length - 1] === 'y') && (test[test.length - 2] === 'l'))
}

console.log(endsInLy("pretty")) ; // false
console.log(endsInLy("instant")) ; // false
console.log(endsInLy("analytic")) ; // false
console.log(endsInLy("timidement")) ; // vrai
console.log(endsInLy("fly")) ; // true
console.log(endsInLy("gallantly")) ; // true