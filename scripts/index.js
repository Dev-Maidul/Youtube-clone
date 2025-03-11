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
// Load videos by categories
const loadCategoriesVideo=(id)=>{
    const url=`https://openapi.programming-hero.com/api/phero-tube/category/${id}`;
    // console.log(url);
    fetch(url)
    .then((res)=>res.json())
.then((data)=>{
    const clickedbtn=document.getElementById(`btn-${id}`);
    clickedbtn.classList.add("active");
    displayVideos(data.category)
})

}
// Display Category
function displayCategory(categories) {
  // Where I will push
  const categoryContainer = document.getElementById("category-container");
  for (let cat of categories) {
    const div = document.createElement("div");
    div.innerHTML = `
            <button id="btn-${cat.category_id}" onclick=loadCategoriesVideo(${cat.category_id}) class="btn btn-sm hover:text-white hover:bg-red-500">${cat.category}</button>
        `;
    categoryContainer.appendChild(div);
  }
}
// Display Videos
const displayVideos = (videos) => {
  const videosConatiner = document.getElementById("videos-Container");
  videosConatiner.innerHTML="";
  if(videos.length==0)
  {
    videosConatiner.innerHTML=`
      <div class="flex col-span-full flex-col justify-center items-center py-20">
            <img class="w-[200px]" src="./assets/Icon.png" alt="">
            <h1 class="font-bold text-2xl py-2">Oops!! Sorry, There is no content here</h1>
        </div>
    `
    return;
  }
  videos.forEach((video) => {
    const videocard = document.createElement("div");
    videocard.innerHTML = `
        <div class="card">
            <figure class="relative">
              <img class="w-full h-[200px] object-cover"
                src="${video.thumbnail}" />
                <span class="absolute bottom-2 right-2 text-sm rounded-sm px-2 py-1 text-white bg-black">3hrs 56 min ago</span>
            </figure>

            <div class="flex gap-3 px-0 py-3">
              <div class="profile">
                <div class="avatar">
                    <div class="ring-primary ring-offset-base-100 w-8 rounded-full ring ring-offset-2">
                      <img src="${video.authors[0].profile_picture}" />
                    </div>
                  </div>
              </div>

              <div class="description">
                <h2 class="font-semibold">${video.title}</h2>
              
              <p class="text-sm text-gray-400 flex gap-2">${video.authors[0].profile_name}<img class="w-5 h-5" src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png" alt=""></p>
              <p class="text-sm text-gray-400">${video.others.views} views</p>
              </div>
              

            </div>
          </div>
        
        `;
        videosConatiner.append(videocard);
  });
};

fetchCategories();

