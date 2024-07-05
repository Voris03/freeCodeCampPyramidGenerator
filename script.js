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

function padRow(rowNumber, rowCount) {
    return " " + character.repeat(rowNumber) + " ";
}



for (let i = 0; i < count; i = i + 1) {
    rows.push(padRow(i+1, count));
}
let result = "";
console.log(result)

for (const row of rows) {
    result = row + "\n" + result
}