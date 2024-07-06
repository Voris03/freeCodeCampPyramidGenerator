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
    rows.unshift(padRow(i, count));
} 

// while (rows.length < count) {
//     rows.push(padRow(rows.length + 1))
// }

// for (let i = count; i > 0; i-- ){
//     rows.push(padRow(i, count))
// }

// Delete 
/*const numbers = [1, 2, 3];
const shifted = numbers.shift()

const unshifted = numbers.unshift(5);
console.log(shifted);
console.log(unshifted);
console.log(numbers) */

let result = "";
console.log(result)

for (const row of rows) {
    result = row + "\n" + result
}