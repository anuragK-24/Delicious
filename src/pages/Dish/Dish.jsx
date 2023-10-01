import React, { useEffect, useState } from "react";
import "./Dish.scss";
import Card from "../../components/Card/Card";
import addDish from "../../Icons/addDish.svg";
import { Link } from "react-router-dom";

export default function Dish() {
  const [dishes, setDishes] = useState([]);
  useEffect(() => {
    const fetchDishes = async () => {
      const data = fetch("https://foodwiki.onrender.com/dishes/get");
      const res = await data;
      const dishData = await res.json();
      setDishes(dishData["dishes"]);
    };
    fetchDishes();
  }, []);

  return (
    <div className="Dish">
      <div className="Dish__Header">Dishes</div>
      <Link to="/dish/add"><img className="Dish__Add" src={addDish} alt="" /></Link>
      
      <div class="Dish__Wrapper">
        {dishes.length!==0 ? (
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
          })) : (
            <div className="Dish__Wrapper__NoDish">No Dishes</div>
          )}
      </div>
    </div>
  );
}
