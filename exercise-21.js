let list = new Array();

list.push(["k2","mounteverst"], 
    ["karachi","hyderabad","islamabad"],
    ["urdu","arabic","english"],
    ["cricket","football","hockey"])


let obj= {}

for(let i = 0; i < list.length; i++){
    obj[i] = list[i]
}
console.log(obj);