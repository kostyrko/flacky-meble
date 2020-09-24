import React from "react";

const WallsOption = ({ onChange }) => {
  return (
    <>
      <label htmlFor="wallNum">Ilość ścian do zabudowy</label>
      <div onChange={(e) => onChange(e)}>
        <input type="radio" value={1} name="wallNum" /> 1
        <input type="radio" value={2} name="wallNum" /> 2
      </div>
    </>
  );
};

export default WallsOption;
