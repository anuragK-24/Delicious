import React, { useEffect, useState } from "react";
import "./Dish.scss";
import Card from "../../components/Card/Card";

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
  console.log(dishes);

  return (
    <div className="Dish">
      <div className="Dish__Header">Dishes</div>
      <div class="Dish__Wrapper">
        {dishes &&
          dishes.length &&
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
          })}
      </div>
    </div>
  );
}
