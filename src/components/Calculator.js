import React, { useState } from "react";
import WallsOption from "./Calculator/WallsOption.js";
import { Wall } from "./Calculator/Wall.js";
import Summery from "./Calculator/Summery.js";
import ContactForm from "./Calculator/ContactForm.js";

const Calculator = () => {
  // number of walls
  const [wallNum, setWallNum] = useState(1);
  const [project, setProject] = useState({});

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
  // console.log('project',Object.keys(project).length > 0);
  // console.log('project',project);


  return (
    <main className="calculator-section">
      <div className="container">
        <div className="calculator-info">
          <h2>Zaprojektuj swoją kuchnię</h2>
          {/* <p>W tym miejscu możesz stworzyć projekt swojej kuchni, poznać jego wstępną wycenę oraz wysłać go do nas, a my się z Tobą skontaktujemy w celu realizacji Twojego pomysłu</p>
          <p>Projekt powstanie na podstawie zaproponowanego przez nas zestawu szafek wiszących oraz stojących. Możesz dopasować ich szerokość oraz wybrać odpowiedni dla Ciebie front (lakier,fornir, melamina), w cenie szafki wliczony jest uchwyt (spośród 40 do wyboru na późniejszym etapie realizacji projektu) </p> */}
          <div>
            {/* <p>Postępuj zgodnie z poniższymi krokami działania</p> */}
            <ol className="instruction-list">
              <li className="instruction-elem"> Wybierz ilości ścian (powierzchni), które mają zostać zabudowane (dostosuje jej wielkość) </li>
              <li className="instruction-elem">
                Dobierz z listy interesujące Cię szafki 
                <span className="additional-info">
                  (lista pojawi się po wyborze liczby ścian do zabudowy)
                </span> 
              </li>
              <li className="instruction-elem">
                Dopasuj szerokość wybranych szafek
              </li>
              <li className="instruction-elem">
                Wybierz rodzaj pokrycia frontu
              </li>
              <li className="instruction-elem">
                Zatwierdź wybór
              </li>
              <li className="instruction-elem">
                W dolnej części strony pojawi się wstępnie wypełniony formularz  z wprowadzonymi przez Ciebie danymi, które możesz do nas wysłać, a my się z Tobą skontaktujemy
              </li>
            </ol> 
          </div>
        </div>
        <form className="project-form">
          <WallsOption onChange={handleWallNumChange} />
          {walls && walls.map((elem) => <Wall key={elem} num={elem} handleConfirmation={handleConfirmation} />)}
        </form>
        {Object.keys(project).length > 0 &&
          <>
            <Summery data={project}/>
            <ContactForm data={project}/>
          </>
        }
      </div>
    </main>
  );
};

export default Calculator;
