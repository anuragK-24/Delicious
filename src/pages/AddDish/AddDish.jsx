import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./AddDish.scss";
import LabelledInput from "../../components/LabelledInput/LabelledInput";

export default function AddDish() {
  const [title, setTitle] = useState("");
  const [recipe, setRecipe] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const handleCreate = async () => {
    try {
      await axios.post(`https://foodwiki.onrender.com/dishes/create`, {
        title,
        recipe,
        photo,
      });
    } catch (err) {
      console.log(err);
    }
  };
  const handleCuisine = async () => {
    try {
      await axios.post(`https://foodwiki.onrender.com/cuisines/get/`, {
        name,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="EditDish">
    <h2 className="EditDish__Heading">Add Dish</h2>
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
          <LabelledInput
            label={"Enter the cuisine"}
            value={cuisine}
            num_row={"4"}
            on_change={(e) => setCuisine(e.target.value)}
          />
          <button
            className="EditDish__Wrapper__Card__Button"
            onClick={handleCreate}
          >
            ADD
          </button>
        
      </div>
    </div>
  </div>);
}
