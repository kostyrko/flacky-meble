import React, { useState } from "react";

import {Wall} from './Calculator/Wall.js'

const Calculator = () => {
  // number of walls
  const [wallNum, setWallNum] = useState(0);
  
  // set walls
  const walls = []
  for (let i=1; i<=wallNum; i++) {
    walls.push(<Wall key={i} num={i}/>)
  }

  const handleWallNumChange = e => {
    setWallNum(parseInt(e.target.value));
  }

  // ! console.logs

  console.log(wallNum);

  return (
    <>
      <form>
        <label htmlFor="wallNum">Ilość ścian do zabudowy</label>
        <div onChange={e=>handleWallNumChange(e)}>
          <input type="radio" value={1} name="wallNum"/> 1
          <input type="radio" value={2} name="wallNum"/> 2
        </div>
          {walls}
      </form>
    </>
  );
};

export default Calculator;
