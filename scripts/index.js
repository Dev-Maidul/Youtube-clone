// Fetch categories
function fetchCategories() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategory(data.categories));
}
// fetch Videos
function loadVideos() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos));
}
// Display Category
function displayCategory(categories) {
  // Where I will push
  const categoryContainer = document.getElementById("category-container");
  for (let cat of categories) {
    const div = document.createElement("div");
    div.innerHTML = `
            <button class="btn btn-sm hover:text-white hover:bg-red-500">${cat.category}</button>
        `;
    categoryContainer.appendChild(div);
  }
}
// Display Videos
const displayVideos = (videos) => {
  const videosConatiner = document.getElementById("videos-Container");
  videos.forEach((video) => {
    const videocard = document.createElement("div");
    videocard.innerHTML = `
        <div class="card shadow-sm">
  <figure>
    <img
      src="${video.thumbnail}" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${video.title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        
        `;
        videosConatiner.append(videocard);
  });
};

fetchCategories();
loadVideos();
