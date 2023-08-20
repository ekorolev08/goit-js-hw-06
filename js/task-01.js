const listOfCategories = document.querySelectorAll("li.item");
console.log(`Number of categories: ${listOfCategories.length}`)

listOfCategories.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`)
});