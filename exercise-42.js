// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that
//  modifies the array of magicians by adding the phrase the Great to each magician’s 
//  name. Call show_magicians() to see that the list has actually been modified.


let magicianNames = ["harry","konal","larry"]

function showMagicians(names){
    names.forEach(name => {
        console.log(name)
    });
}
function makeGreat(magicians){
    let greatMagicians = [];

    while(magicians.length > 0){
        let gMagician = magicians.pop() + " the Great"
        greatMagicians.push(gMagician);
    }

    greatMagicians.forEach(magician => {
        magicians.push(magician)
    })
    
}
makeGreat(magicianNames)
showMagicians(magicianNames)