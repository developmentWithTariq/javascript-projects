
// list of quest
let guestList = new Array("ahmed", "nasir","ali")


//print invitation
guestList.forEach(guest=> {
    console.log(`Hi ${guest}, Tariq invited you on dinner.`)
})
// absent guest
console.log("\nali will not come on dinner")


let guestIndex = guestList.indexOf('ali')


guestList[guestIndex] = "umer";

// print updated list
console.log(`\n\tUpdated Guest LIst!\n`)
guestList.forEach(guest=> {

    console.log(`Hi ${guest}, Tariq invited you on dinner.`)
})

console.log("We foun bigger dinning table.")

// add guest in start
guestList.splice(0,0,"Anees")
// add guest in middle 
guestList.splice(2,0,"Salman")
// add guest in last
guestList.push("Qasim")

console.log("\tNew Invitation")

guestList.forEach(guest=> {
    console.log(`Hi ${guest}, Tariq invited you on dinner.`)
})

console.log("\nI can invite only two people for dinner.\n")

let removeList = []

removeList.push(guestList.pop())
removeList.push(guestList.pop())
removeList.push(guestList.pop())
removeList.push(guestList.pop())
console.log()
removeList.forEach(rGuest => {
    
    console.log(`${rGuest} sorry I cannot invite you to dinner.`)
})
console.log("\nNew Invitation\n")
guestList.forEach(guest=> {
    console.log(`Hi ${guest}, you are still invited.`)
})

guestList.pop()
guestList.pop()
//Empty List
console.log("Empty List",guestList)
