import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getMealById } from "../api";
import Loader from "../components/Loader";

export default function Recipe() {
  const [recipe, setRecipe] = useState([]);
  const [showRecipe, setShowRecipe] = useState(false);
  const { id } = useParams();
  const { goBack } = useHistory();

  useEffect(() => {
    getMealById(id).then((data) => setRecipe(data.meals[0]));
  }, [id]);

  const handleRecipeShow = () => {
    setShowRecipe(!showRecipe);
  };

  const {
    strMeal,
    strMealThumb,
    strCategory,
    strArea,
    strInstructions,
    strYoutube,
  } = recipe;

  return (
    <>
      <button className="btn" onClick={goBack}>
        Go Back
      </button>
      {!recipe.idMeal ? (
        <Loader />
      ) : (
        <div className="recipe">
          <img src={strMealThumb} alt={strMeal} />
          <h1>{strMeal}</h1>
          <h5>
            <b>Category:</b> {strCategory}
          </h5>
          {strArea && (
            <h5>
              <b>{strArea}</b> meal.
            </h5>
          )}
          <p>{strInstructions}</p>
          <button onClick={handleRecipeShow} className="btn">
            Show Recipe
          </button>
          {showRecipe && (
            <table className="centered">
              <thead>
                <tr>
                  <th>Ingredient</th>
                  <th>Measure</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(recipe).map((key) => {
                  if (key.includes("Ingredient") && recipe[key]) {
                    return (
                      <tr key={key}>
                        <td>{recipe[key]}</td>
                        <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            </table>
          )}
          {strYoutube ? (
            <>
              <h5>Video Recipe</h5>
              <div className="responsive">
                <iframe
                  src={`https://www.youtube.com/embed/${strYoutube.slice(-11)}`}
                  title={id}
                  frameborder="0"
                  allowFullScreen
                  width="560"
                  height="315"
                ></iframe>
              </div>
            </>
          ) : null}
        </div>
      )}
    </>
  );
}
