let movie = {
        titre : "Fight Club",
        year : 1999,
        genre : ["drame", "thriller"],
        avec : ["Brad Pitt", "Edward Norton"],
} 


console.log(movie.year) ;
console.log(movie["year"]) ;
// acces au valeur d'un propriete


console.log(movie.genre) ;
console.log(movie.genre[0]) ;
console.log(movie.genre[1]) ;
// acces au valeur d'un propriete


console.log(movie.duration) ;
console.log(movie["genre"][1]) ;
// acces au valeur d'un propriete


console.log(movie.genre.length) ;
// acces au valeur d'un propriete avec un method
