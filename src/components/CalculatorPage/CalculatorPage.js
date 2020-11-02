import React, { useState } from "react";
import WallsOption from "./WallsOption.js";
import { Wall } from "./Wall.js";
import Summery from "./Summery.js";
import ProjectContactForm from "../ContactForms/ProjectContactForm.js";

const CalculatorPage = () => {
  // number of walls
  const [wallNum, setWallNum] = useState(1);
  const [project, setProject] = useState({});

  // set num of walls -> wallNum
  const handleWallNumChange = (e) => {
    console.log(e);
    console.log(e.target.value);
    setWallNum(parseInt(e.target.value));
  };

  let walls = Array.from(Array(wallNum), (e, i) => i + 1);

  const handleConfirmation = (data, price, lining, num, dimensions) => {
    // console.log('data',data);
    setProject({
      ...project,
      ["wall" + num]: {
        num: num,
        price: price,
        lining: lining,
        dimensions: dimensions,
        ...data,
      },
    });
  };
  // console.log('project',Object.keys(project).length > 0);
  // console.log('project',project);

  return (
    <main className="calculator-section">
      <div className="container">
        <div className="calculator-info">
          <h2>Zaprojektuj swoją kuchnię</h2>
          <div className="decoration-1"></div>
          <div>
            {/* <p>Postępuj zgodnie z poniższymi krokami działania</p> */}
            <ol className="instruction-list">
              <li className="instruction-elem">
                Wybierz ilości ścian (powierzchni), które mają zostać zabudowane
                (dostosuje jej wielkość)
              </li>
              <li className="instruction-elem">
                Dobierz z listy interesujące Cię szafki
              </li>
              <li className="instruction-elem">
                Opcjonalnie: dopasuj szerokość wybranych szafek
              </li>
              <li className="instruction-elem">
                Wybierz rodzaj pokrycia frontu
              </li>
              <li className="instruction-elem">Zatwierdź wybór</li>
              <li className="instruction-elem">
                W dolnej części strony pojawi się wstępnie wypełniony formularz
                z wprowadzonymi przez Ciebie danymi, które możesz do nas wysłać,
                a my się z Tobą skontaktujemy
              </li>
            </ol>
            <div className="decoration-2"></div>
          </div>
        </div>
        <form className="project-form">
          <WallsOption onChange={handleWallNumChange} />
          {walls &&
            walls.map((elem) => (
              <Wall
                key={elem}
                num={elem}
                handleConfirmation={handleConfirmation}
              />
            ))}
        </form>
        {Object.keys(project).length > 0 && (
          <>
            <Summery data={project} />
            <ProjectContactForm data={project} />
          </>
        )}
      </div>
    </main>
  );
};

export default CalculatorPage;
