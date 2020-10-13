import React from 'react';

const Summery = ({data}) => {

  return (
    <>
      {Object.keys(data).map(elem=> {
        const {num,price,lining, upperUnits, lowerUnits, dimensions} = data[elem]
        return (
          <div key={num}>
            <h3>Ściana {num}</h3>
            <p>Podane wymiary ściany szerokość: {dimensions.width} cm, wysokość {dimensions.height} cm </p>
            <p> Łączna cena szafek na podstawie podanych danych {price} pln</p>
            <p>rodzaj okładziny {lining}</p>
            {
              <>
                <ul className="upperUnits">
                {upperUnits && 
                  Object.keys(upperUnits).map(elem=>
                  {const {type, width, price} = upperUnits[elem]
                  return <li key={elem}> typ: {type} szerokość: {width} cena: {price}</li>}
                  )}
                </ul>
                <ul className="lowerUnits">
                {lowerUnits && 
                  Object.keys(lowerUnits).map(elem=>
                  {const {type, width, price} = lowerUnits[elem]
                  return <li key={elem}> typ: {type} szerokość: {width} cena: {price}</li>}
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
