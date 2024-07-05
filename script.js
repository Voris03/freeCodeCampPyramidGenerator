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
for (let character = 0; character < count; character = character + 1) {
    rows.push(character);
  }
let result = "";
console.log(result)

for (const row of rows) {
    result = row + "\n" + result
}