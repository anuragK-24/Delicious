import { Link } from "react-router-dom";
import "./Card.scss";
// import githubIcon from "../../icon/github.svg";
// import linkIcon from "../../icon/link.svg";

export default function Card({
  imageUrl,
  label,
  description="fsdfs",
  dishId="fsdf",
}) {
  return (
    <div className="Card">
      <img className="Card__Image" src={imageUrl} alt="github" />
      <div className="Card__Intro">
        <h1 className="Card__Intro__Heading">{label}</h1>
        <p className="Card__Intro__Description">{description}</p>
        <div className="Card__Intro__Icons">
        
          
          {dishId && dishId.length!==0 && <Link to ={`/edit/${dishId}`}>fadf</Link>}
        
        </div>
      </div>
    </div>
  );
}
