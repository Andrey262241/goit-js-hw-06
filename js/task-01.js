const liItems = document.querySelectorAll(".item");
console.log(`Number of categories: ${liItems.length}`);

const heading = document.querySelectorAll("h2");
console.log(`Category: ${heading[0].innerHTML}`);
console.log(`Elements: ${liItems[0].children[1].children.length}`);

console.log(`Category: ${heading[1].innerHTML}`);
console.log(`Elements: ${liItems[1].children[1].children.length}`);

console.log(`Category: ${heading[2].innerHTML}`);
console.log(`Elements: ${liItems[2].children[1].children.length}`);