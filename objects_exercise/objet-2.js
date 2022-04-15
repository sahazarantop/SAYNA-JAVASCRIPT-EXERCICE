let restaurant = {
        nom : "Bob's Burgers",
        location : "123 Ocean Avenue",
        propriétaires : ["Bob Belcher", "Linda Belcher"],
        création : 2011,
        menu : ["burgers", "frites", "milk-shakes"],
} 

console.log(restaurant.propriétaires) ;
console.log(restaurant.nom) ;


let someKey = "menu" ;
console.log(restaurant[someKey]) ;
//ou console.log(restaurant['menu']) ;


console.log(restaurant.menu) ;
console.log(restaurant["menu"]) ;
console.log(restaurant[someKey]) ;
console.log(restaurant) ;
console.log(restaurant.menu.includes("frites")) ;