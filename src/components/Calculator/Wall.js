import React, { useEffect, useState } from "react";
import { kitchenUnits } from "./db";
import KitchenUnits from "./KitchenUnits";
import SelectedUnit from "./SelectedUnit";
import DrawingUnit from "./DrawingUnit";
import UnitsList from "./UnitsList";

export const Wall = ({ num }) => {
  // * handle wall dimensions
  const [dimensions, setDimensions] = useState({
    width: 400,
    height: 250,
  });

  const { width, height } = dimensions;

  const wallStyle = {
    backgroundColor: "lightgray",
    ...dimensions,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name,value);
    setDimensions({
      ...dimensions,
      [name]: parseInt(value),
    });
  };

  // * variables and state to handle selection of units => SelectOption component
  const [customKitchenUnits, setCustomKitchenUnits] = useState({});
  const { lowerUnits, upperUnits } = customKitchenUnits;
  const [id, setId] = useState(0);

  
  const addNewUnit = (newUnit) => {
    const { type, width, price, name, typeOfUnits } = newUnit;
    setId((id) => id + 1);
    console.log(id);
    setCustomKitchenUnits({
      ...customKitchenUnits,
      [typeOfUnits]: {
        ...customKitchenUnits[typeOfUnits],
        [`${type}_${id}`]: {
          id: id,
          name: name,
          type: type,
          width: width,
          price: price, 
          typeOfUnits: typeOfUnits
        },
      },
    });
  };

  // * variables and state to handle change in SELECTED units => SelectedUnits component
  const handleInput = e => {
    const {value, name, dataset} = e.target
    setCustomKitchenUnits({
      ...customKitchenUnits,
      [dataset.type]: {
        ...customKitchenUnits[dataset.type],
        [name]: {
          ...customKitchenUnits[dataset.type][name],
          price: parseInt(value)*10,
          width: parseInt(value)
        },
      },
    });
  };

  // delete item from customKitchenUnits 
  const handleDelete = e => {
    const {dataset, name} = e.target
    // console.log('delete',dataset.type, name);
    // delete customKitchenUnits[dataset.type][name];
    // setCustomKitchenUnits({
    //   ...customKitchenUnits})

    let temp = {...customKitchenUnits}
    delete temp[dataset.type][name]
    setCustomKitchenUnits({
      ...temp})
  }

  
  
  console.log('lowerUnits', lowerUnits);

  // TODO walidacja -> ściana nie może być mniejsza niż 50
  return (
    <div className="wall-container">
      <h2>Ściana nr {num}</h2>
      <p>proszę wpisać wymiary (w cm)</p>
      <label htmlFor="width">Szerokość ściany w cm</label>
      <input name="width" type="number" value={width} onChange={handleChange} />
      <label htmlFor="height">Wysokość ściany w cm</label>
      <input
        name="height"
        type="number"
        value={height}
        onChange={handleChange}
      />
      <div className="wall" style={wallStyle}>
        <div className="upperUnitsDrawing">
          {upperUnits &&
            Object.keys(upperUnits).map((elem) => (
              <DrawingUnit
                key={elem}
                info={upperUnits[elem]}
              />
          ))}
        </div>
        <div className="lowerUnitsDrawing">
          {lowerUnits &&
            Object.keys(lowerUnits).map((elem) => (
              <DrawingUnit
                key={elem}
                info={lowerUnits[elem]}
              />
          ))}
        </div>
      </div>
      
      <ul className="upperUnits">
        <UnitsList type={upperUnits} handleInput={handleInput} handleDelete={handleDelete} />
      </ul>
      <ul className="lowerUnits">
      <UnitsList type={lowerUnits} handleInput={handleInput} handleDelete={handleDelete} />
      </ul>

      <KitchenUnits
        addNewUnit={addNewUnit}
        kitchenUnits={kitchenUnits}
      />
    </div>
  );
};
