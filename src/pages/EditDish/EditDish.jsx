import React, { useEffect } from "react";
import { useState } from "react";


export default function EditDish() {
    const [data,setData]=useState({})
    useEffect(() => {
        
        fetch("https://foodwiki.onrender.com/dishes/get/6491b5f83456318fad82371a")
          .then((res) => res.json())
          .then((data) =>{ console.log(data["dish"]);
            setData(data["dish"])
        });
      }

    ,[])
  return (
    <form action="">
      <label htmlFor="">Enter the Dish </label>
      <input value={data.title} type="text" />
      <label htmlFor="">Enter the Dish </label>
      <input type="text" />
    </form>
  );
}
