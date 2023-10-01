import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "./AddDish.scss";
import LabelledInput from "../../components/LabelledInput/LabelledInput";

export default function AddDish() {
  const [title, setTitle] = useState("");
  const [recipe, setRecipe] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [cuisineData, setCuisineData] = useState([]);

  const handleCreate = async () => {
    if (cuisineID.length === 0) {
      alert("Please enter a valid cuisine");
      return;
    }
    if (title.length === 0) {
      alert("Please enter a valid title");
      return;
    } else if (recipe.length === 0) {
      alert("Please enter a valid recipe");
      return;
    }
    try {
      await axios.post(`https://foodwiki.onrender.com/dishes/create`, {
        title,
        recipe,
        dishImage: photo,
        cuisine: cuisineID,
      });
      alert(`${title} Added Successfully which is in ${cuisine}`);
    } catch (err) {
      console.log(err);
    }
  };
  const handleCuisine = async () => {
    try {
      const a = await axios.get(`https://foodwiki.onrender.com/cuisines/get/`);
      const res = await a;
      const data = await res.data;
      setCuisineData(data["cuisines"]);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    handleCuisine();
  }, [cuisine]);
  console.log(cuisineData);
  // console.log(typeof cuisineData)
  const filteredCuisine = cuisineData.filter((c) => c.name === cuisine);
  const cuisineID = filteredCuisine.length > 0 ? filteredCuisine[0]._id : [];
  console.log(cuisineID);
  return (
    <div className="AddDish">
      <h2 className="AddDish__Heading">Add Dish</h2>
      <div className="AddDish__Wrapper">
        <div class="AddDish__Wrapper__Card">
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
            label={"Enter the cuisine"}
            value={cuisine}
            on_change={(e) => setCuisine(e.target.value)}
          />
          <LabelledInput
            label={"Enter the Recipe"}
            value={recipe}
            num_row={"4"}
            on_change={(e) => setRecipe(e.target.value)}
          />
          <button
            className="AddDish__Wrapper__Card__Button"
            onClick={handleCreate}
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}
