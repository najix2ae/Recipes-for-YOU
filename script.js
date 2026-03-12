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
]

const container=document.getElementById("recipes")
const trending=document.getElementById("trending")

function createCard(r){

return `
<div class="recipe">

<img src="${r.img}">

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
<p>${r.type} recipe</p>
</div>

</div>
</div>
`

}

if(container){

recipes.forEach(r=>{
container.innerHTML+=createCard(r)
})

}

if(trending){

recipes.slice(0,5).forEach(r=>{
trending.innerHTML+=createCard(r)
})

}


/* expand */

document.addEventListener("click", function(e){

if(e.target.classList.contains("view")){

let card = e.target.closest(".card")

let recipe = {
name: card.querySelector(".title").innerText,
img: card.querySelector("img").src,
time: card.querySelector(".time").innerText,
difficulty: card.querySelector(".difficulty").innerText,
ingredients: card.querySelector(".ingredients").innerText.split(","),
instructions: card.querySelector(".instructions").innerText
}

localStorage.setItem("selectedRecipe", JSON.stringify(recipe))

window.location.href = "recipe.html"

}

})


/* favorites */

document.addEventListener("click",function(e){

if(e.target.classList.contains("fav")){

e.target.classList.toggle("active")

}

})


/* rating */

document.addEventListener("click",function(e){

if(e.target.parentElement.classList.contains("rating")){

let stars=[...e.target.parentElement.children]

stars.forEach((s,i)=>{

s.textContent=i<=stars.indexOf(e.target)?"★":"☆"

})

}

})


/* dark mode */

function toggleDark(){

document.body.classList.toggle("dark")
  /* recipes */
const r = JSON.parse(localStorage.getItem("selectedRecipe"))

if(r && document.getElementById("recipeTitle")){

document.getElementById("recipeTitle").textContent = r.name
document.getElementById("recipeImage").src = r.img
document.getElementById("recipeIngredients").textContent = r.ingredients
document.getElementById("recipeTime").textContent = r.time || ""
document.getElementById("recipeDifficulty").textContent = r.difficulty || ""
document.getElementById("recipeInstructions").textContent = r.instructions || ""

}
