import React from "react";
import "./LabelledInput.scss";
export default function LabelledInput({ label, value, on_change, num_row }) {
  return (
    <div className={`LabelledInput`}>
      <div className="LabelledInput__Label">{label} </div>
      {num_row > 1 ? (
        <textarea
          className="LabelledInput__Textarea"
          name=""
          id=""
          value={value}
          onChange={on_change}
          rows={num_row}
          cols="30"
        ></textarea>
      ) : (
        <input
          className="LabelledInput__Input"
          value={value}
          onChange={on_change}
          type="text"
        />
      )}
    </div>
  );
}
