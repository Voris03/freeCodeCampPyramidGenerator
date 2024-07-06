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
let inverted = true;

function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}


// измените код на другой тип цикла.

for (let i = 1; i <= count; i++) {
    if (inverted){
        rows.unshift(padRow(i, count));
    } else { 
        rows.push(padRow(i, count));
    }
} 

let result = "";
console.log(result)

for (const row of rows) {
    result = row + "\n" + result
}