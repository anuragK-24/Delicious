import React from "react";
import "./LabelledInput.scss";
export default function LabelledInput({ label, value, on_change, num_row }) {
  return (
    <div className={`LabelledInput`}>
      <div className="LabelledInput__Label">{label} </div>
      {num_row > 1 ? (
        <textarea
          name=""
          id=""
          value={value}
          onChange={on_change}
          rows={num_row}
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
