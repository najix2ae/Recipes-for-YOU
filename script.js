// Full recipes object with all 30+ recipes
const recipes = {
   // Italian
  spaghetti_carbonara: {
    title: "Spaghetti Carbonara",
    img: "spaghetti_carbonara.jpg",
    ingredients: ["200g spaghetti","100g pancetta","2 eggs","50g parmesan","Salt & pepper"],
    instructions: ["Cook spaghetti in salted water.","Fry pancetta until crisp.","Mix eggs and parmesan in a bowl.","Drain pasta, remove from heat, mix with pancetta and egg-cheese mixture.","Serve immediately with extra parmesan."]
  },
  lasagna: {
    title: "Lasagna",
    img: "lasagna.jpg",
    ingredients: ["Lasagna sheets","500g minced beef","1 onion","2 cups tomato sauce","200g mozzarella","Bechamel sauce"],
    instructions: ["Preheat oven to 180°C.","Cook minced beef with chopped onion until browned.","Layer lasagna sheets, meat sauce, bechamel, and mozzarella in baking dish.","Repeat layers and finish with cheese on top.","Bake 40-45 min until golden and bubbly."]
  },
  margherita_pizza: {
    title: "Margherita Pizza",
    img: "margherita_pizza.jpg",
    ingredients: ["Pizza dough","Tomato sauce","Mozzarella cheese","Fresh basil leaves"],
    instructions: ["Preheat oven to 220°C.","Roll out pizza dough.","Spread tomato sauce evenly.","Add mozzarella and basil.","Bake 12-15 min until crust is golden."]
  },
  tiramisu: {
    title: "Tiramisu",
    img: "tiramisu.jpg",
    ingredients: ["Ladyfingers","250g mascarpone","3 eggs","100g sugar","Coffee","Cocoa powder"],
    instructions: ["Brew strong coffee and let it cool.","Beat egg yolks with sugar, mix in mascarpone.","Whip egg whites until stiff, fold into mascarpone mixture.","Dip ladyfingers in coffee and layer in dish.","Spread cream mixture over layers, repeat.","Dust with cocoa powder and chill 3-4 hours."]
  },

  // Japanese
  sushi_rolls: {
    title: "Sushi Rolls",
    img: "sushi_rolls.jpg",
    ingredients: ["Sushi rice","Nori sheets","Cucumber","Avocado","Carrot","Cooked seafood or tofu"],
    instructions: ["Prepare sushi rice and let cool.","Place nori on bamboo mat, spread rice thinly.","Add fillings along one edge.","Roll tightly with bamboo mat.","Cut into bite-sized pieces and serve with soy sauce."]
  },
  ramen: {
    title: "Ramen",
    img: "ramen.jpg",
    ingredients: ["Ramen noodles","Chicken broth","Soy sauce","Eggs","Green onions","Pork slices"],
    instructions: ["Boil eggs for 7 min and peel.","Heat broth, add soy sauce.","Cook noodles separately and drain.","Place noodles in bowl, pour broth over.","Top with pork, egg, and green onions."]
  },
  tempura: {
    title: "Tempura",
    img: "tempura.jpg",
    ingredients: ["Shrimp or vegetables","Tempura batter mix","Oil for frying"],
    instructions: ["Prepare tempura batter according to instructions.","Heat oil to 180°C.","Dip shrimp/vegetables in batter and fry until golden.","Drain excess oil and serve with dipping sauce."]
  },

  // Mexican
  tacos_al_pastor: {
    title: "Tacos al Pastor",
    img: "tacos_al_pastor.jpg",
    ingredients: ["Tortillas","Pork shoulder","Pineapple","Onion","Cilantro","Al pastor marinade"],
    instructions: ["Marinate pork in al pastor sauce 4-6 hours.","Grill or roast pork and pineapple.","Warm tortillas, assemble with pork, pineapple, onion, cilantro.","Serve with lime wedges."]
  },
  quesadilla: {
    title: "Quesadilla",
    img: "quesadilla.jpg",
    ingredients: ["Tortillas","Cheese","Optional fillings: chicken, vegetables"],
    instructions: ["Heat a skillet.","Place tortilla in skillet, add cheese and fillings.","Top with another tortilla or fold.","Cook until cheese melts and golden on both sides.","Slice and serve."]
  },
  burrito: {
    title: "Burrito",
    img: "burrito.jpg",
    ingredients: ["Flour tortillas","Rice","Beans","Meat or veggies","Cheese","Salsa"],
    instructions: ["Cook rice and beans.","Warm tortilla, add rice, beans, meat, cheese, salsa.","Fold sides and roll tightly.","Serve immediately."]
  },
  churros: {
    title: "Churros",
    img: "churros.jpg",
    ingredients: ["Flour","Water","Sugar","Cinnamon","Oil for frying"],
    instructions: ["Heat water, mix with flour to make dough.","Pipe dough into hot oil and fry until golden.","Drain and roll in sugar-cinnamon mixture.","Serve warm."]
  },

  // American
  cheeseburger: {
    title: "Cheeseburger",
    img: "cheeseburger.jpg",
    ingredients: ["Burger buns","Ground beef patties","Cheese slices","Lettuce","Tomato","Onion","Condiments"],
    instructions: ["Form beef patties and season.","Cook patties on skillet or grill.","Toast buns lightly.","Assemble burger with lettuce, tomato, onion, patty, cheese, condiments.","Serve hot."]
  },
  fried_chicken: {
    title: "Fried Chicken",
    img: "fried_chicken.jpg",
    ingredients: ["Chicken pieces","Flour","Spices","Eggs","Oil for frying"],
    instructions: ["Season chicken pieces.","Dip in flour, then egg, then flour again.","Heat oil to 175°C, fry chicken until golden and cooked through.","Drain excess oil and serve."]
  },
  mac_and_cheese: {
    title: "Mac and Cheese",
    img: "mac_and_cheese.jpg",
    ingredients: ["Macaroni","Cheddar cheese","Milk","Butter","Flour","Salt & pepper"],
    instructions: ["Cook macaroni and drain.","Make cheese sauce: melt butter, stir in flour, add milk, then cheese.","Mix macaroni with sauce and serve."]
  },
  caesar_salad: {
    title: "Caesar Salad",
    img: "caesar_salad.jpg",
    ingredients: ["Romaine lettuce","Croutons","Parmesan","Caesar dressing"],
    instructions: ["Chop lettuce, toss with croutons and dressing.","Sprinkle with Parmesan cheese.","Serve immediately."]
  },

  // Breakfast
  pancakes: {
    title: "Pancakes",
    img: "pancakes.jpg",
    ingredients: ["Flour","Milk","Eggs","Sugar","Baking powder","Butter"],
    instructions: ["Mix dry ingredients.","Add milk and eggs, whisk until smooth.","Cook on greased skillet until golden on both sides.","Serve with syrup or toppings."]
  },
  omelette: {
    title: "Omelette",
    img: "omelette.jpg",
    ingredients: ["Eggs","Salt & pepper","Butter","Optional fillings: cheese, veggies"],
    instructions: ["Beat eggs with salt and pepper.","Heat butter in skillet.","Pour eggs, add fillings, fold.","Cook until set and serve."]
  },
  french_toast: {
    title: "French Toast",
    img: "french_toast.jpg",
    ingredients: ["Bread slices","Eggs","Milk","Cinnamon","Sugar","Butter"],
    instructions: ["Whisk eggs, milk, sugar, cinnamon.","Dip bread slices in mixture.","Cook on buttered skillet until golden on both sides.","Serve with syrup."]
  },
  smoothie_bowl: {
    title: "Smoothie Bowl",
    img: "smoothie_bowl.jpg",
    ingredients: ["Frozen fruits","Yogurt or milk","Toppings: granola, nuts, fruits"],
    instructions: ["Blend frozen fruits with yogurt/milk.","Pour into bowl.","Top with granola, nuts, fruits.","Serve immediately."]
  },

  // Seafood / Dinner
  grilled_salmon: {
    title: "Grilled Salmon",
    img: "grilled_salmon.jpg",
    ingredients: ["Salmon fillets","Olive oil","Lemon","Salt & pepper"],
    instructions: ["Preheat grill or oven.","Brush salmon with olive oil, season.","Grill/roast 10-15 min until cooked.","Serve with lemon wedges."]
  },

  // Desserts
  chocolate_cake: {
    title: "Chocolate Cake",
    img: "chocolate_cake.jpg",
    ingredients: ["Flour","Cocoa powder","Sugar","Eggs","Butter","Baking powder","Milk"],
    instructions: ["Preheat oven to 180°C.","Mix dry ingredients, add eggs, butter, milk.","Pour into pan and bake 30-35 min.","Cool and frost if desired."]
  },
  ice_cream_sundae: {
    title: "Ice Cream Sundae",
    img: "ice_cream_sundae.jpg",
    ingredients: ["Ice cream","Chocolate syrup","Whipped cream","Cherries","Sprinkles"],
    instructions: ["Scoop ice cream into bowl.","Top with syrup, whipped cream, cherries, sprinkles.","Serve immediately."]
  },
  brownies: {
    title: "Brownies",
    img: "brownies.jpg",
    ingredients: ["Butter","Chocolate","Sugar","Eggs","Flour","Vanilla extract"],
    instructions: ["Preheat oven to 175°C.","Melt butter and chocolate.","Mix with sugar, eggs, flour, vanilla.","Pour into pan, bake 25-30 min.","Cool and cut into squares."]
  },

  // Indian
  butter_chicken: {
    title: "Butter Chicken",
    img: "butter_chicken.jpg",
    ingredients: ["Chicken","Butter","Tomato puree","Cream","Spices"],
    instructions: ["Marinate chicken with spices.","Cook in butter until done.","Add tomato puree and cream, simmer.","Serve with rice or naan."]
  },
  chicken_biryani: {
    title: "Chicken Biryani",
    img: "chicken_biryani.jpg",
    ingredients: ["Basmati rice","Chicken","Yogurt","Spices","Onion","Ghee"],
    instructions: ["Marinate chicken with spices and yogurt.","Fry onions until golden.","Layer rice and chicken in pot, cook on low heat.","Serve hot with raita."]
  },
  paneer_tikka: {
    title: "Paneer Tikka",
    img: "paneer_tikka.jpg",
    ingredients: ["Paneer cubes","Yogurt","Spices","Lemon juice","Bell peppers"],
    instructions: ["Marinate paneer and veggies in yogurt and spices.","Skewer and grill or bake until golden.","Serve with chutney."]
  },
  masala_dosa: {
    title: "Masala Dosa",
    img: "masala_dosa.jpg",
    ingredients: ["Dosa batter","Potatoes","Onions","Spices","Oil"],
    instructions: ["Cook potato filling with onions and spices.","Spread dosa batter on hot pan.","Place filling, fold dosa and cook till crisp.","Serve with chutney and sambar."]
  },

  // Thai
  pad_thai: {
    title: "Pad Thai",
    img: "pad_thai.jpg",
    ingredients: ["Rice noodles","Shrimp or chicken","Eggs","Bean sprouts","Peanuts","Pad Thai sauce"],
    instructions: ["Soak noodles until soft.","Stir-fry protein, add noodles, sauce, and eggs.","Toss with bean sprouts and peanuts.","Serve with lime wedges."]
  },
  tom_yum_soup: {
    title: "Tom Yum Soup",
    img: "tom_yum_soup.jpg",
    ingredients: ["Lemongrass","Kaffir lime leaves","Galangal","Shrimp","Mushrooms","Chili","Lime juice"],
    instructions: ["Boil lemongrass, lime leaves, galangal.","Add mushrooms and shrimp.","Season with chili and lime juice.","Simmer briefly and serve hot."]
  },
  green_curry: {
    title: "Green Curry",
    img: "green_curry.jpg",
    ingredients: ["Green curry paste","Coconut milk","Chicken or tofu","Vegetables","Basil","Fish sauce"],
    instructions: ["Heat curry paste, add coconut milk.","Add protein and vegetables.","Simmer until cooked.","Season with fish sauce, garnish with basil, serve with rice."]
  }
};

// --- INDEX PAGE ---
function loadIndexRecipes() {
  const container = document.getElementById("recipe-container");
  if (!container) return;

  for (const key in recipes) {
    const recipe = recipes[key];

    const card = document.createElement("div");
    card.className = "recipe-card";

    const img = document.createElement("img");
    img.src = recipe.img;
    img.alt = recipe.title;

    const title = document.createElement("h3");
    title.textContent = recipe.title;

    const btn = document.createElement("button");
    btn.className = "view-btn";
    btn.textContent = "View Recipe";
    btn.addEventListener("click", () => {
      window.location.href = `recipe.html?name=${key}`;
    });

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(btn);
    container.appendChild(card);
  }
}

// --- RECIPE DETAILS PAGE ---
function loadRecipe() {
  const main = document.getElementById("recipe-content");
  if (!main) return;

  const params = new URLSearchParams(window.location.search);
  const name = params.get("name");
  const recipe = recipes[name];
  if (!recipe) {
    main.innerHTML = "<p>Recipe not found.</p>";
    return;
  }

  let html = `<h1>${recipe.title}</h1>`;
  html += `<img src="${recipe.img}" alt="${recipe.title}" class="recipe-img">`;

  html += "<h2>Ingredients</h2><ul>";
  recipe.ingredients.forEach(i => html += `<li>${i}</li>`);
  html += "</ul>";

  html += "<h2>Instructions</h2><ol>";
  recipe.instructions.forEach(step => html += `<li>${step}</li>`);
  html += "</ol>";

  html += `<a href="index.html" class="back-button">← Back to Recipes</a>`;
  main.innerHTML = html;
}

// --- DARK MODE TOGGLE ---
function darkModeToggle() {
  document.body.classList.toggle("dark");
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
  loadIndexRecipes();
  loadRecipe();

  const toggle = document.getElementById("darkModeToggle");
  if (toggle) toggle.addEventListener("click", darkModeToggle);
});
