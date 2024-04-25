const recipes = require("../assets/recepies.json");

// This function returns a sorted list of all actors in our movie dataset.

// Change this for the recepie names
export function getAllIngredients(item) {
//   let actors = new Set();
//   movies.forEach((movie) => {
//     movie.actors.forEach((actor) => {
//       actors.add(actor);
//     });
//   });
//   return Array.from(actors).sort();
    const formattedIngredients = [];
    
        item.ingredients.forEach(ingredient => {
            formattedIngredients.push(`${ingredient.quantity} ${ingredient.name}`);
        });
    ;
    return formattedIngredients;
    }