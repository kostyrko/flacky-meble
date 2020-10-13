import React from "react";

const WallsOption = ({ onChange }) => {
  return (
    <div className='walls-option'>
      <label htmlFor="wallNum">Ilość ścian do zabudowy</label>
      <div onChange={(e) => onChange(e)}>
        <input type="radio" value={1} name="wallNum" checked="checked" /> 1
        <input type="radio" value={2} name="wallNum" /> 2
        <input type="radio" value={3} name="wallNum" /> 3
      </div>
    </div>
  );
};

export default WallsOption;
