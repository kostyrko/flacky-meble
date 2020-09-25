import React, { useState } from "react";
import WallsOption from "./Calculator/WallsOption.js";
import { Wall } from "./Calculator/Wall.js";

const Calculator = () => {
  // number of walls
  const [wallNum, setWallNum] = useState(0);
  const [project, setProject] = useState('');

  // set num of walls -> wallNum
  const handleWallNumChange = (e) => {
    setWallNum(parseInt(e.target.value));
  };

  const handleConfirmation = data => {
    // console.log('data',data);
    setProject(JSON.stringify(data))
    // console.log('project',project);
  }

  // create an Array from wallNum (starting at 1) to create Wall component/s
  let walls = Array.from(Array(wallNum), (e, i) => i + 1);

  return (
    <>
      <form>
        <WallsOption onChange={handleWallNumChange} />
        {walls && walls.map((elem) => <Wall key={elem} num={elem} handleConfirmation={handleConfirmation} />)}
      </form>
      <input className="project-summery" type="text" value={project}/>
    </>
  );
};

export default Calculator;
