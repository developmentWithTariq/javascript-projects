// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should
//  have one parameter that collects as many items as the function call provides, and it should print a 
// summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function make_sandwich(items){
    console.log("\nI'll make you a great sandwich:")
    items.forEach(item => {
        
        console.log(" adding " + item + " to your sandwich.")
        console.log("Your sandwich is ready!")
    });
}

make_sandwich(['burger kabab', 'cheese', 'spicy', 'club '])
make_sandwich(['turkey', 'amli slices', 'honey mustard'])
make_sandwich(['pakola', 'strawberry jam'])