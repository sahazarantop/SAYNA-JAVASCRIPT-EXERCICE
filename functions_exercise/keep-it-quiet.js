function keepItQuiet(myString) {
        return myString.toLowerCase() + "..."
}

console.log(keepItQuiet("HOORAY")) ; // 'hooray...' (en anglais)
console.log(keepItQuiet("Doggo")) ; // 'doggo...' (en anglais)
console.log(keepItQuiet("WHAT ?!?!")) ; // 'what ?!?!...' (quoi ?!!...)