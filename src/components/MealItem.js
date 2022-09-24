import React from "react";
import { Link } from "react-router-dom";

export default function MealItem(props) {
  const { idMeal, strMeal, strMealThumb } = props;
  return (
    <div className="card">
      <div className="card-image">
        <img alt={strMeal} src={strMealThumb} />
      </div>
      <div className="card-content">
        <h2 className="card-title">
          <b>{strMeal}</b>
        </h2>
      </div>
      <div className="card-action">
        <Link to={`/meal/${idMeal}`} className="btn">
          See Recipe
        </Link>
      </div>
    </div>
  );
}
