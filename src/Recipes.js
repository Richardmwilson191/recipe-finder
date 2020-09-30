import React from "react";
import style from "./recipe.module.css";

const Recipes = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <p>
        {calories} <strong>Calories</strong>
      </p>
      <img src={image} alt="" />
      <ol className="ingredients">
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
    </div>
  );
};

export default Recipes;
