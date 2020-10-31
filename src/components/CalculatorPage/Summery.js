import React from 'react';

const Summery = ({data}) => {

  return (
    <>
      {Object.keys(data).map(elem=> {
        const {num,price,lining, upperUnits, lowerUnits, dimensions} = data[elem]
        return (
          <div className="summery-list" key={num}>
            <h4>Ściana {num}</h4>
            <p className="dimensions">Długość: <span> {dimensions.width} cm </span>, wysokość: <span> {dimensions.height} cm </span></p>
            <p className="price"> Cena szafek na podstawie podanych danych  <span> {price} pln </span> (dla tej ściany)</p>
            <p className="lining">rodzaj okładziny <span>{lining}</span></p>
            {
              <>
                <ul className="upperUnits">
                {upperUnits && 
                  Object.keys(upperUnits).map(elem=>
                  {const {type, width, price} = upperUnits[elem]
                  return <li key={elem}>{type}  - cena: {price} (szerokość: {width})</li>}
                  )}
                </ul>
                <ul className="lowerUnits">
                {lowerUnits && 
                  Object.keys(lowerUnits).map(elem=>
                  {const {type, width, price} = lowerUnits[elem]
                  return <li key={elem}>{type}  - cena: {price} (szerokość: {width})</li>}
                  )}
                </ul>
              </>
            }
          </div>
      )})}
    </>
  );
}

export default Summery;
