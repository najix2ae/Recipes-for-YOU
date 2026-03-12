// ================================
// 1️⃣ Recipe List (local images)
// ================================

const recipes = [
  { name:"Spaghetti Carbonara", type:"italian", time:"25 min", diff:"Medium", img:"spaghetti_carbonara.jpg" },
  { name:"Lasagna", type:"italian", time:"1 hr", diff:"Hard", img:"lasagna.jpg" },
  { name:"Margherita Pizza", type:"italian", time:"30 min", diff:"Medium", img:"margherita_pizza.jpg" },
  { name:"Tiramisu", type:"italian", time:"45 min", diff:"Medium", img:"tiramisu.jpg" },
  { name:"Sushi Rolls", type:"japanese", time:"50 min", diff:"Hard", img:"sushi_rolls.jpg" },
  { name:"Ramen", type:"japanese", time:"40 min", diff:"Medium", img:"ramen.jpg" },
  { name:"Tempura", type:"japanese", time:"20 min", diff:"Easy", img:"tempura.jpg" },
  { name:"Tacos al Pastor", type:"mexican", time:"20 min", diff:"Medium", img:"tacos_al_pastor.jpg" },
  { name:"Quesadilla", type:"mexican", time:"10 min", diff:"Easy", img:"quesadilla.jpg" },
  { name:"Burrito", type:"mexican", time:"20 min", diff:"Easy", img:"burrito.jpg" },
  { name:"Churros", type:"mexican", time:"25 min", diff:"Medium", img:"churros.jpg" },
  { name:"Cheeseburger", type:"american", time:"20 min", diff:"Easy", img:"cheeseburger.jpg" },
  { name:"Fried Chicken", type:"american", time:"30 min", diff:"Medium", img:"fried_chicken.jpg" },
  { name:"Mac and Cheese", type:"american", time:"25 min", diff:"Easy", img:"mac_and_cheese.jpg" },
  { name:"Caesar Salad", type:"lunch", time:"12 min", diff:"Easy", img:"caesar_salad.jpg" },
  { name:"Pancakes", type:"breakfast", time:"15 min", diff:"Easy", img:"pancakes.jpg" },
  { name:"Omelette", type:"breakfast", time:"10 min", diff:"Easy", img:"omelette.jpg" },
  { name:"French Toast", type:"breakfast", time:"12 min", diff:"Easy", img:"french_toast.jpg" },
  { name:"Smoothie Bowl", type:"breakfast", time:"8 min", diff:"Easy", img:"smoothie_bowl.jpg" },
  { name:"Grilled Salmon", type:"dinner", time:"30 min", diff:"Medium", img:"grilled_salmon.jpg" },
  { name:"Chocolate Cake", type:"dessert", time:"50 min", diff:"Hard", img:"chocolate_cake.jpg" },
  { name:"Ice Cream Sundae", type:"dessert", time:"5 min", diff:"Easy", img:"ice_cream_sundae.jpg" },
  { name:"Brownies", type:"dessert", time:"35 min", diff:"Medium", img:"brownies.jpg" },
  { name:"Butter Chicken", type:"indian", time:"40 min", diff:"Medium", img:"butter_chicken.jpg" },
  { name:"Chicken Biryani", type:"indian", time:"1 hr", diff:"Hard", img:"chicken_biryani.jpg" },
  { name:"Paneer Tikka", type:"indian", time:"30 min", diff:"Medium", img:"paneer_tikka.jpg" },
  { name:"Masala Dosa", type:"indian", time:"40 min", diff:"Medium", img:"masala_dosa.jpg" },
  { name:"Pad Thai", type:"thai", time:"25 min", diff:"Medium", img:"pad_thai.jpg" },
  { name:"Tom Yum Soup", type:"thai", time:"20 min", diff:"Medium", img:"tom_yum_soup.jpg" },
  { name:"Green Curry", type:"thai", time:"35 min", diff:"Medium", img:"green_curry.jpg" }
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
       viewBtn.onclick = () => {

localStorage.setItem("selectedRecipe", JSON.stringify(recipe));

window.location.href = "recipe.html";

};
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
const selectedRecipe = JSON.parse(localStorage.getItem("selectedRecipe"));

if (selectedRecipe && document.getElementById("recipeTitle")) {

document.getElementById("recipeTitle").textContent = selectedRecipe.name;

document.getElementById("recipeImage").src = selectedRecipe.img;

document.getElementById("recipeTime").textContent = selectedRecipe.time;

document.getElementById("recipeDifficulty").textContent = selectedRecipe.difficulty;

document.getElementById("recipeInstructions").textContent = selectedRecipe.instructions;


const ingredientList = document.getElementById("recipeIngredients");

ingredientList.innerHTML = "";

selectedRecipe.ingredients.forEach(ingredient => {

const li = document.createElement("li");

li.textContent = ingredient;

ingredientList.appendChild(li);

});

}
function toggleDark(){
  document.body.classList.toggle("dark");
}
