function greatestPopulation(params) {
        let max = 0
        let pays = ""
        for (let i = 0; i < params.length; i++) {

                if (max < params[i].population) {

                        max = params[i].population
                        pays = params[i].nom
                }
        
        }

        return pays
}


let countries1 = [
        { nom : "Cameroun", population : 27744989, PIB : 38.68 },
        { nom : "Belarus", population : 9477918, pib : 59.66 },
        {nom : "Indonésie", population : 267026366, PIB : 1042 },
        {nom : "Guyane", population : 750204, PIB : 3.88 },
] ;
console.log(greatestPopulation(countries1)) ; // 'Indonesia' (Indonésie)


let countries2 = [
        {nom : "Nouvelle-Zélande", population : 4925477, pib : 204.9 },
        {nom : "Mozambique", population : 30098197, pib : 14.72 },
        {nom : "Groenland", population : 57616, PIB : 2.71 },
        {nom : "Kazakhstan", population : 19091949, PIB : 179.3 },
        {nom : "Birmanie", population : 56590071, PIB : 71.21 },
] ;
console.log(greatestPopulation(countries2)) ; // 'Birmanie'.

        
        