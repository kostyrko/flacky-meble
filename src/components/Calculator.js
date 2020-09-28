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

  const handleConfirmation = (data, price, lining, num) => {
    console.log('data',data);
    // setProject(JSON.stringify(data));
    let upper = []
    let lower = []

    console.log('keys',Object.keys(data.upperUnits));
    if (Object.keys(data.upperUnits)) {
      Object.keys(data.upperUnits).forEach(elem=> {
        const {name, width, id} =data.upperUnits[elem]
        upper.push(`${id}) ${name}, szerokość: ${width} `)})
    }
    if (Object.keys(data.lowerUnits)) {
      Object.keys(data.lowerUnits).forEach(elem=> {
        const {name, width, id} =data.lowerUnits[elem]
        lower.push(`${id}) ${name}, szerokość: ${width} `)})
    }
    setProject( [...project,
      `
      Ściana ${num}
      Rodzaj okładziny: ${lining} 
      Szacunkowy koszt: ${price} 
      Szafki wiszące:
      ${upper}
      Szafki stojące:
      ${lower}
      `
    ]);
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
      <textarea className="project-summery" value={project}/>
    </>
  );
};

export default Calculator;
