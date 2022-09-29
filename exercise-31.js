
// • If the list is empty, print the message We need to find some users!

let users = []
if(users.length > 0){
    users.forEach(user => {
        // • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
        if(user === "admin"){
            console.log(`Hello ${user} would you like to see a status report?`)
        }else{
            // • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
            console.log(`Hello ${user}, thank you for logging in again.`)
        }
    })
}else{
    console.log(" We need to find some users!")
}