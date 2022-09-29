// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads 
// I love JavaScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different
//  message.

function makeShirt(size = "large" | "medium", text =  "I love JavaScript."){
    if(size != "large" || size != "medium"){
        console.log(`Your shirt size is ${size} and text will be "${text}".`)
    }else{
        console.log(`Your shirt size is ${size} and text will be "I love JavaScript".`)
    }
}

makeShirt("large")
makeShirt("medium")
makeShirt("small","hello world")