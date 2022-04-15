function longer(myString1, myString2) {
        if (myString1.length < myString2.length) {
                console.log(myString2);
                return myString2
        } else if(myString1.length === myString2.length){
                console.log(myString1);
                return myString1
        } else{
                return myString1
        }
}

console.log(longer("drum", "piranha")) ; // 'piranha'.
console.log(longer("basket", "fork")) ; // 'basket' (panier)
console.log(longer("flanelle", "durable")) ; // "durable".
console.log(longer("disrupt", "ability")) ; // "disrupt".
console.log(longer("bird", "shoe")) ; // 'bird' (oiseau)