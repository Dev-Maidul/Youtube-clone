// // Load categories
// function loadCategories() {
//   fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
//     .then((res) => res.json())
//     .then((data) => {
//       displayCategory(data.categories);
//     });
// }
// function displayCategory(categories) {
//   const categoryContainer = document.getElementById("category-container");
//   // Loop on all categories
//   for (let cat of categories) {
//     // create an object
//     const div = document.createElement("div");
//     div.innerHTML = `
//     <button class="btn btn-sm hover:text-white hover:bg-red-500">${cat.category}</button>
//     `;
//     categoryContainer.appendChild(div);
//   }
// }
// loadCategories();

// Fetch categories
function fetchCategories()
{
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then((res)=>res.json())
    .then((data)=>displayCategory(data.categories))
}
// Display Category
function displayCategory(categories)
{
    // Where I will push
    const categoryContainer=document.getElementById('category-container');
    for(let cat of categories)
    {
        const div=document.createElement('div');
        div.innerHTML=`
            <button class="btn btn-sm hover:text-white hover:bg-red-500">${cat.category}</button>
        `
        categoryContainer.appendChild(div);
    }
}




fetchCategories();