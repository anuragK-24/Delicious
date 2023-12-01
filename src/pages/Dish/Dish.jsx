import React, { useEffect, useState } from "react";
import "./Dish.scss";
import Card from "../../components/Card/Card";
import addDish from "../../Icons/addDish.svg";
import cookingLoader from "../../Icons/cooking_Loader.gif";
import { Link } from "react-router-dom";

export default function Dish() {
  const [dishes, setDishes] = useState([]);
  const [isResolved, setIsResolved] = useState(false);
  useEffect(() => {
    const fetchDishes = async () => {
      const data = fetch("https://foodwiki.onrender.com/dishes/get");
      const res = await data;
      const dishData = await res.json();
      setIsResolved(true);
      setDishes(dishData["dishes"]);
    };
    fetchDishes();
  }, []);

  return (
    <div className="Dish">
      <div className="Dish__Header">Dishes</div>
      <Link className="Dish__Add" to="/dish/add">
        <img style={{height:"3em"}}  src={addDish} alt="" />
      </Link>
        <span className="Dish__Subhead" >Add new Dish here </span>
      <div class="Dish__Wrapper">
        {!isResolved ? (
          <img className="Dish__Loader" src={cookingLoader} alt="" />
        ) : (
          <>
            {dishes.length !== 0 ? (
              dishes.map((a, key) => {
                return (
                  <Card
                    recipe={a.recipe}
                    imageUrl={a.dishImage}
                    key={key}
                    deployLink={a.deployLink}
                    label={a.title}
                    dishId={a._id}
                  />
                );
              })
            ) : (
              <div className="Dish__Wrapper__NoDish">No Dishes</div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
