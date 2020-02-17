import React, { useState } from "react";

export const Checkbox = ({ isChecked, onChange, id }) => {

  const [ checked, setChecked ] = useState(isChecked);
  
  return (
    <label className="mr-5">
      <input 
        type="checkbox" 
        className="nes-checkbox"
        checked={ checked }
        onChange={ (e) => {
          setChecked(e.target.checked);
          onChange(e.target.checked);
        }}
        id={ id }
      />
      <span>Sound</span>
    </label>  
  );
}