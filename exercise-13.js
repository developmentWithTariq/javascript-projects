// Your Own Array: Think of your favorite mode of transportation, such
//  as a motorcycle or a car, and make a list that stores several examples
//  . Use your list to print a series of statements about 
// these items, such as “I would like to own a Honda motorcycle.

let transport = ["car","motorcycle"]

transport.forEach(t => {
    if(t === "motorcycle"){
        console.log(`I would like to own a Honda ${t}`)
    }else{
        console.log(`I would like to own a suzuki ${t} `)
    }

})