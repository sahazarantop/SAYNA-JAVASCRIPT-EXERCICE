const dog = {
        nom : "Manny",
        age : 5,
        race : "carlin",
        couleur : "fawn",
        aliments_préférés : ["bacon"],
}

console.log(dog.age);

console.log(dog.race);

console.log(dog.aliments_préférés);

dog.age = dog.age + 1

console.log(dog.age);

dog.aliments_préférés.push('saucisse')
console.log(dog.aliments_préférés);

for (const i in dog) {
        console.log(i + ' est ' + dog[i]);
}