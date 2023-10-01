import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./EditDish.scss";
import LabelledInput from "../../components/LabelledInput/LabelledInput";

export default function EditDish() {
  const [title, setTitle] = useState("");
  const [recipe, setRecipe] = useState("");
  const [photo, setPhoto] = useState("");
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  useEffect(() => {
    const fetchDish = async () => {
      const data = axios.get(
        `https://foodwiki.onrender.com/dishes/get/${path}`
      );
      const res = await data;
      const dishData = await res.data;
      setTitle(dishData["dish"].title);
      setRecipe(dishData["dish"].recipe);
      setPhoto(dishData["dish"].dishImage);
    };
    fetchDish();
  }, []);
  const handleUpdate = async () => {
    if (title.length === 0) {
      alert("Please enter a valid title");
      return;
    } else if (recipe.length === 0) {
      alert("Please enter a valid recipe");
      return;
    }
    try {
      await axios.patch(`https://foodwiki.onrender.com/dishes/update/${path}`, {
        title,
        recipe,
        dishImage: photo,
      });
      alert("Dish Updated Successfully");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="EditDish">
      <h2 className="EditDish__Heading">Edit Dish</h2>
      <div className="EditDish__Wrapper">
        <div class="EditDish__Wrapper__Card">
          <LabelledInput
            label={"Enter the Dish"}
            value={title}
            on_change={(e) => setTitle(e.target.value)}
          />

          <LabelledInput
            label={"Enter the Image Link"}
            value={photo}
            on_change={(e) => setPhoto(e.target.value)}
          />

          <LabelledInput
            label={"Enter the Recipe"}
            value={recipe}
            num_row={"4"}
            on_change={(e) => setRecipe(e.target.value)}
          />

          <button
            className="EditDish__Wrapper__Card__Button"
            onClick={handleUpdate}
          >
            UPDATE
          </button>
        </div>
      </div>
    </div>
  );
}
