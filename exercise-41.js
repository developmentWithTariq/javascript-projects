// Magicians: Make a array of magician’s names. Pass 
// the array to a function called show_magicians(), which prints the name of each magician in the array.

let magicianNames = ["harry","konal","larry"]

function showMagicians(names){
    names.forEach(name => {
        console.log(name)
    });
}

showMagicians(magicianNames)