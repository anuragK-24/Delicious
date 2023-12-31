import { Link } from "react-router-dom";
import "./Card.scss";
import updateIcon from "../../Icons/update.svg";
import deleteIcon from "../../Icons/delete.svg";

export default function Card({
  imageUrl,
  label,
  recipe,
  dishId,
}) {
  const handleDelete = async () => {
    try {
      if (!window.confirm(`Are you sure you want to delete ${label}?`)) {
        return;
      }
      await fetch(`https://foodwiki.onrender.com/dishes/delete/${dishId}`, {
        method: "DELETE",
      });
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  }


  return (
    <div className="Card">
      <img className="Card__Image" src={imageUrl} alt="github" />
      <div className="Card__Intro">
        <h1 className="Card__Intro__Heading">{label}</h1>
        <p className="Card__Intro__Description">{recipe}</p>
        <div className="Card__Intro__Icons">
          {dishId && dishId.length !== 0 && (
            <Link to={`/edit/${dishId}`}>
              <img className="Card__Intro__Icons__Icon" src={updateIcon} alt="" />
            </Link>
          )}
          <img className="Card__Intro__Icons__Icon" onClick={handleDelete} src={deleteIcon} alt="" />
        </div>
      </div>
    </div>
  );
}
