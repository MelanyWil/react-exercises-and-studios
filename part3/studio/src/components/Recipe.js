const RecipeAuthor = () => {
   let authorLink = "https://easyweeknightrecipes.com";
   let authorPhoto = "https://easyweeknightrecipes.com/wp-content/uploads/2020/01/katerina.jpg";
   let authorName = "Katerina";

   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%"}} width="200px" />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["chicken breasts", "chicken broth", "bacon", "cream cheese", "shredded cheddar cheese"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Slow Cooker Crack Chicken Soup</h1>
            <p>Slow Cooker Crack Chicken Soup is filled with tender shredded white meat chicken, real crumbles of crispy bacon, cream cheese, cheddar cheese, homemade ranch seasoning, and kale. It’s cozy comfort in a bowl!</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://easyweeknightrecipes.com/wp-content/uploads/2021/03/slow-cooker-crack-chicken-soup-9.jpg" alt="Slow Cooker Crack Chicken Soup" className="imageUpdates" height="450px"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}