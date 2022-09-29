// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the
//  array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate
//   array. Call show_magicians() with each array to show that
//    you have one array of the original names and one array with the Great
//    added to each magician’s name.



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

    return greatMagicians;
    
}
showMagicians(magicianNames)
console.log("\n\tGreat magicians\n")
makeGreat([...magicianNames]).forEach(name => {
    console.log(name)
})
console.log("\n\tOriginal Array\n")
showMagicians(magicianNames)