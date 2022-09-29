
// • Make a list of five or more usernames called current_users.
let currentUsers = ["tariq","danish","nasrullah","waqas","ahmed"]

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
let newUsers = ["tariq","salman","Waqas","ali","umer"]

newUsers.forEach(user => {
    // • Loop through the new_users list to see if each new username has already been used. If it has,
    //  print a message that the person will need to enter a new username. If a username has not been used,
    //   print a message saying that the username is available.

    if(currentUsers.includes(user)){
        console.log(" the person will need to enter a new username")        
    }else{
        console.log(" the username is available.")
    }
})