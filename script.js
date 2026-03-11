// ================================
// 1️⃣ Recipe List (local images)
// ================================

const recipes = [
  { name:"Spaghetti Carbonara", type:"italian", time:"25 min", diff:"Medium", img:"images/spaghetti_carbonara.jpg" },
  { name:"Lasagna", type:"italian", time:"1 hr", diff:"Hard", img:"images/lasagna.jpg" },
  { name:"Margherita Pizza", type:"italian", time:"30 min", diff:"Medium", img:"images/margherita_pizza.jpg" },
  { name:"Tiramisu", type:"italian", time:"45 min", diff:"Medium", img:"images/tiramisu.jpg" },
  { name:"Sushi Rolls", type:"japanese", time:"50 min", diff:"Hard", img:"images/sushi_rolls.jpg" },
  { name:"Ramen", type:"japanese", time:"40 min", diff:"Medium", img:"images/ramen.jpg" },
  { name:"Tempura", type:"japanese", time:"20 min", diff:"Easy", img:"images/tempura.jpg" },
  { name:"Tacos al Pastor", type:"mexican", time:"20 min", diff:"Medium", img:"images/tacos_al_pastor.jpg" },
  { name:"Quesadilla", type:"mexican", time:"10 min", diff:"Easy", img:"images/quesadilla.jpg" },
  { name:"Burrito", type:"mexican", time:"20 min", diff:"Easy", img:"images/burrito.jpg" },
  { name:"Churros", type:"mexican", time:"25 min", diff:"Medium", img:"images/churros.jpg" },
  { name:"Cheeseburger", type:"american", time:"20 min", diff:"Easy", img:"images/cheeseburger.jpg" },
  { name:"Fried Chicken", type:"american", time:"30 min", diff:"Medium", img:"images/fried_chicken.jpg" },
  { name:"Mac and Cheese", type:"american", time:"25 min", diff:"Easy", img:"images/mac_and_cheese.jpg" },
  { name:"Caesar Salad", type:"lunch", time:"12 min", diff:"Easy", img:"images/caesar_salad.jpg" },
  { name:"Pancakes", type:"breakfast", time:"15 min", diff:"Easy", img:"images/pancakes.jpg" },
  { name:"Omelette", type:"breakfast", time:"10 min", diff:"Easy", img:"images/omelette.jpg" },
  { name:"French Toast", type:"breakfast", time:"12 min", diff:"Easy", img:"images/french_toast.jpg" },
  { name:"Smoothie Bowl", type:"breakfast", time:"8 min", diff:"Easy", img:"images/smoothie_bowl.jpg" },
  { name:"Grilled Salmon", type:"dinner", time:"30 min", diff:"Medium", img:"images/grilled_salmon.jpg" },
  { name:"Chocolate Cake", type:"dessert", time:"50 min", diff:"Hard", img:"images/chocolate_cake.jpg" },
  { name:"Ice Cream Sundae", type:"dessert", time:"5 min", diff:"Easy", img:"images/ice_cream_sundae.jpg" },
  { name:"Brownies", type:"dessert", time:"35 min", diff:"Medium", img:"images/brownies.jpg" },
  { name:"Butter Chicken", type:"indian", time:"40 min", diff:"Medium", img:"images/butter_chicken.jpg" },
  { name:"Chicken Biryani", type:"indian", time:"1 hr", diff:"Hard", img:"images/chicken_biryani.jpg" },
  { name:"Paneer Tikka", type:"indian", time:"30 min", diff:"Medium", img:"images/paneer_tikka.jpg" },
  { name:"Masala Dosa", type:"indian", time:"40 min", diff:"Medium", img:"images/masala_dosa.jpg" },
  { name:"Pad Thai", type:"thai", time:"25 min", diff:"Medium", img:"images/pad_thai.jpg" },
  { name:"Tom Yum Soup", type:"thai", time:"20 min", diff:"Medium", img:"images/tom_yum_soup.jpg" },
  { name:"Green Curry", type:"thai", time:"35 min", diff:"Medium", img:"images/green_curry.jpg" }
];

// ================================
// 2️⃣ Select Containers
// ================================
const container = document.getElementById("recipes");
const trending = document.getElementById("trending");

// ================================
// 3️⃣ Function to Create Recipe Cards
// ================================
function createCard(r){
  return `
    <div class="recipe" data-type="${r.type}">
      <img src="${r.img}" alt="${r.name}">
      <div class="content">
        <h3>${r.name}</h3>
        <p>⏱ ${r.time}</p>
        <p>📊 ${r.diff}</p>
        <button class="view">View</button>
        <button class="fav">❤️</button>
        <div class="rating">
          <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
        </div>
        <div class="details">
          <p>Type: ${r.type}</p>
        </div>
      </div>
    </div>
  `;
}

// ================================
// 4️⃣ Render All Recipes
// ================================
if(container){
  recipes.forEach(r=>{
    container.innerHTML += createCard(r);
  });
}

// ================================
// 5️⃣ Render Trending (first 8)
// ================================
if(trending){
  recipes.slice(0,8).forEach(r=>{
    trending.innerHTML += createCard(r);
  });
}

// ================================
// 6️⃣ Expand Recipe Details
// ================================
document.addEventListener("click", function(e){
  if(e.target.classList.contains("view")){
    const d = e.target.parentElement.querySelector(".details");
    d.style.display = d.style.display==="block" ? "none" : "block";
  }
});

// ================================
// 7️⃣ Favorite Toggle
// ================================
document.addEventListener("click", function(e){
  if(e.target.classList.contains("fav")){
    e.target.classList.toggle("active");
  }
});

// ================================
// 8️⃣ Star Rating
// ================================
document.addEventListener("click", function(e){
  if(e.target.parentElement.classList.contains("rating")){
    const stars = [...e.target.parentElement.children];
    stars.forEach((s,i)=>{
      s.textContent = i <= stars.indexOf(e.target) ? "★" : "☆";
    });
  }
});

// ================================
// 9️⃣ Search
// ================================
const searchBar = document.getElementById("search");
if(searchBar){
  searchBar.addEventListener("input", function(){
    const val = this.value.toLowerCase();
    document.querySelectorAll(".recipe").forEach(r=>{
      const title = r.querySelector("h3").textContent.toLowerCase();
      r.style.display = title.includes(val) ? "block" : "none";
    });
  });
}

// ================================
// 🔟 Filter by Type
// ================================
const filter = document.getElementById("filter");
if(filter){
  filter.addEventListener("change", function(){
    const v = this.value;
    document.querySelectorAll(".recipe").forEach(r=>{
      if(v==="all") r.style.display="block";
      else r.style.display = r.dataset.type===v ? "block" : "none";
    });
  });
}

// ================================
// 1️⃣1️⃣ Dark Mode
// ================================
function toggleDark(){
  document.body.classList.toggle("dark");
}