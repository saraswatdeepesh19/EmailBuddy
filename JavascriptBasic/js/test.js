let multiplicationTable = [];

const value = 10;

for (let i = 1; i <= value; i++) {
  let tempArray = [];
  for (let j = 1; j <= value; j++) {
    tempArray.push(i * j);
  }
  multiplicationTable.push(tempArray);
}
for (let row of multiplicationTable) {
  console.log(row.join("\t"));
}
{
  {
  }
}
// Output the multiplication table to the console
