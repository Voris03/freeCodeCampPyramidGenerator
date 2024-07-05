// Step 1

console.log("Let's build a pyramid using JavaScript basics:");
console.log("    #    ");
console.log("   ###   ");
console.log("  #####  ");
console.log(" ####### ");
console.log("#########");


//Step 2-40

const character = "#";
const count = 8;
const rows = [];

function padRow (name) {
    const test = "Testing";
    
    console.log("This works!");
    return test;
    console.log("This works!");
}
const call = padRow("Voris");
console.log(call);



for (let i = 0; i < count; i = i + 1) {
    rows.push(character.repeat(i+1));
}
let result = "";
console.log(result)

for (const row of rows) {
    result = row + "\n" + result
}