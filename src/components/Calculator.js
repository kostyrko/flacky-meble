import React, { useState } from "react";
import WallsOption from "./Calculator/WallsOption.js";
import { Wall } from "./Calculator/Wall.js";
import Summery from "./Calculator/Summery.js";
import ContactForm from "./Calculator/ContactForm.js";

const Calculator = () => {
  // number of walls
  const [wallNum, setWallNum] = useState(0);
  const [project, setProject] = useState({});
  const [addInfo, setAddInfo] = useState('')

  // set num of walls -> wallNum
  const handleWallNumChange = (e) => {
    setWallNum(parseInt(e.target.value));
  };

  let walls = Array.from(Array(wallNum), (e, i) => i + 1);

  const handleConfirmation = (data, price, lining, num,dimensions) => {
    // console.log('data',data);
    setProject({
      ...project,
      ["wall"+num] : {
        num: num,
        price: price,
        lining: lining,
        dimensions : dimensions,
        ...data,
      }
    })

  }
  console.log('project',project);


  return (
    <>
      <form>
        <WallsOption onChange={handleWallNumChange} />
        {walls && walls.map((elem) => <Wall key={elem} num={elem} handleConfirmation={handleConfirmation} />)}
      </form>
      <section className="summery">
        {project &&
          <Summery data={project}/>}
      </section>
      <textarea className="project-summery" value={addInfo} onChange={e=>setAddInfo(e.target.value)}/>
      <ContactForm/>
    </>
  );
};

export default Calculator;
