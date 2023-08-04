import styles from './Ingredients.module.css';

export default function RecipeIngredients() {
    let ingredient = ["corn", "cream cheese", "mayonnaise", "sour cream", "Pepper Jack cheese"];
    return (
        <div>
            <h3>Recipe Ingredients</h3>
            <ul className = {styles.ingredientList}>
                <li>{ingredient[0]}</li>
                <li>{ingredient[1]}</li>
                <li>{ingredient[2]}</li>
                <li>{ingredient[3]}</li>
                <li>{ingredient[4]}</li>
            </ul>
        </div>
    )
}