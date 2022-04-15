let recipe = {
        nom : "Crêpes à l'ancienne",
        difficulte : "facile",
        savoureux : true,
        ingrédients : ["oeufs", "lait", "beurre", "farine", "sucre"],
} ;

console.log(recipe.nom);

console.log(recipe['nom']);

console.log(recipe.ingrédients.length);

console.log(recipe.calories);



let someVariable = "difficulte" ;

console.log(recipe[someVariable]);

console.log(recipe['ingrédients']);

for (let i = 0; i < recipe.ingrédients.length; i++) {
        console.log(recipe.ingrédients[i]);
}