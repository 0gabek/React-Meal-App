import { Link } from "react-router-dom";

export default function CategoryItem(props) {
  const { strCategory, strCategoryThumb, strCategoryDescription } = props;
  return (
    <div className="card">
      <div className="card-image">
        <img alt={strCategory} src={strCategoryThumb} />
      </div>
      <div className="card-content">
        <h2 className="card-title">
          <b>{strCategory}</b>
        </h2>
        <p>{strCategoryDescription.slice(0, 60)}...</p>
      </div>
      <div className="card-action">
        <Link to={`/category/${strCategory}`} className="btn">
          <b>{strCategory}</b> Category
        </Link>
      </div>
    </div>
  );
}
