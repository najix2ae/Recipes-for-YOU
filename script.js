// ================================
// Recipes array (30+ recipes)
// ================================
const recipes = [
  {name:"Spaghetti Carbonara", img:"spaghetti_carbonara.jpg", type:"italian", time:"25 min", diff:"Medium",
    ingredients:["200g spaghetti","100g pancetta","2 eggs","50g parmesan","Salt & pepper"],
    instructions:["Cook spaghetti in salted water.","Fry pancetta until crispy.","Beat eggs and mix with parmesan.","Drain pasta and mix with pancetta.","Remove from heat and add egg-cheese mixture.","Serve immediately."]
  },
  {name:"Lasagna", img:"lasagna.jpg", type:"italian", time:"1 hr", diff:"Hard",
    ingredients:["Lasagna sheets","500g minced beef","2 cups tomato sauce","200g mozzarella","Bechamel sauce"],
    instructions:["Preheat oven to 180°C.","Cook minced beef with tomato sauce.","Layer lasagna sheets, meat, and bechamel in a dish.","Top with mozzarella.","Bake for 40 minutes.","Let cool slightly and serve."]
  },
  {name:"Margherita Pizza", img:"margherita_pizza.jpg", type:"italian", time:"30 min", diff:"Medium",
    ingredients:["Pizza dough","Tomato sauce","Mozzarella","Basil leaves"],
    instructions:["Preheat oven to 220°C.","Roll out dough and add tomato sauce.","Top with mozzarella and basil.","Bake for 10–12 minutes.","Serve hot."]
  },
  {name:"Tiramisu", img:"tiramisu.jpg", type:"italian", time:"45 min", diff:"Medium",
    ingredients:["Ladyfingers","Mascarpone","Coffee","Cocoa powder","Sugar","Eggs"],
    instructions:["Mix mascarpone, eggs, and sugar.","Dip ladyfingers in coffee and layer.","Add mascarpone mixture on top.","Repeat layers.","Chill for 4 hours.","Sprinkle cocoa powder before serving."]
  },
  {name:"Sushi Rolls", img:"sushi_rolls.jpg", type:"japanese", time:"50 min", diff:"Hard",
    ingredients:["Sushi rice","Nori sheets","Raw fish or veggies","Soy sauce","Wasabi"],
    instructions:["Cook sushi rice and let it cool.","Place nori on bamboo mat.","Spread rice evenly on nori.","Add filling.","Roll tightly and slice.","Serve with soy sauce and wasabi."]
  },
  // … Add all other recipes here
];

// ================================
// Containers
// ================================
const container = document.getElementById("recipes");

// ================================
// Render recipe cards
// ================================
function createCard(r){
  const urlName = r.name.toLowerCase().replace(/ /g,"_");
  return `
  <div class="recipe" data-type="${r.type}">
    <img src="${r.img}" alt="${r.name}">
    <div class="content">
      <h3>${r.name}</h3>
      <p>⏱ ${r.time}</p>
      <p>📊 ${r.diff}</p>
      <button class="view" data-url="${urlName}">View Recipe</button>
      <div class="favorites">
        <span class="star" data-name="${urlName}">☆</span>
      </div>
    </div>
  </div>`;
}

function renderRecipes(list){
  container.innerHTML = "";
  list.forEach(r=> container.innerHTML += createCard(r));
}

// Initial render
renderRecipes(recipes);

// ================================
// View recipe redirect
// ================================
document.addEventListener("click", function(e){
  if(e.target.classList.contains("view")){
    const urlName = e.target.dataset.url;
    window.location.href = `recipe.html?name=${urlName}`;
  }
  // Toggle favorite
  if(e.target.classList.contains("star")){
    e.target.textContent = e.target.textContent==="☆"?"★":"☆";
  }
});

// ================================
// Search & filter
// ================================
document.getElementById("search").addEventListener("input", e=>{
  const val = e.target.value.toLowerCase();
  const filtered = recipes.filter(r=>r.name.toLowerCase().includes(val));
  renderRecipes(filtered);
});

document.getElementById("type-filter").addEventListener("change", e=>{
  const val = e.target.value;
  const filtered = val==="all"?recipes:recipes.filter(r=>r.type===val);
  renderRecipes(filtered);
});

// ================================
// Dark mode toggle
// ================================
const darkBtn = document.getElementById("dark-mode-toggle");
darkBtn.addEventListener("click", ()=>{
  document.body.classList.toggle("dark");
});
