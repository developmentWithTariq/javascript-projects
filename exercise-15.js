
// list of quest
let guestList = new Array("ahmed","nasir","ali")


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