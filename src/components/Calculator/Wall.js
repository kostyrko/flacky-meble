import React, { useState, useEffect } from "react";
import { kitchenUnits } from "./db";
import KitchenUnits from "./KitchenUnits";
import DrawUnit from "./DrawUnit";
import UnitsList from "./UnitsList";

export const Wall = ({ num, handleConfirmation }) => {
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

  const handleClick = (e) => {
    console.log('clicked');
    e.preventDefault();
    handleConfirmation(customKitchenUnits, priceWithLining,lining, num, dimensions);
  };

  // * variables and state to handle selection of units => SelectOption component
  const [customKitchenUnits, setCustomKitchenUnits] = useState({});
  const { lowerUnits, upperUnits } = customKitchenUnits;
  const [id, setId] = useState(1);

  const [price, setPrice] = useState(0);
  const [priceWithLining, setPriceWithLining] = useState(0);
  const [lining, setLining] = useState('lakier')

  

  const addNewUnit = (newUnit) => {
    const { type, typeOfUnits } = newUnit;
    setId((id) => id + 1);
    // console.log(id);
    setCustomKitchenUnits({
      ...customKitchenUnits,
      [typeOfUnits]: {
        ...customKitchenUnits[typeOfUnits],
        [`${type}_${id}`]: {
          ...newUnit,
          id: id,
        },
      },
    });
  };

  const getPrice = () => {
    let temp = [];
      // * get prices of all items
      Object.keys(customKitchenUnits).forEach((elem1) =>
        Object.keys(customKitchenUnits[elem1]).forEach((elem2) =>
          temp.push(customKitchenUnits[elem1][elem2].price)
        )
      );
      let temp2 = temp.reduce((elem, acc) => elem + acc, 0);
      setPrice(temp2);
      // console.log('price',price);
  }

  const handleRadioInput = (e) => {
    const { value } = e.target;
    console.log('value handleRadioInput:',value)
    setLining(value)
  };
  
  const priceSummery = () => {
    // console.log('lining priceSummery:',lining);
    let temp;
    if (lining === "lakier") {
      temp = 0;
    }
    if (lining === "fornir") {
      temp = 50;
    }
    if (lining === "melamina") {
      temp = 75;
    }
    const newPrice = price+temp
    // console.log('price priceSummery:',price)
    setPriceWithLining(newPrice)
    // console.log(priceWithLining);
  }
  
  // every time customKitchenUnits change get new price
  useEffect(() => {
      getPrice()
  }, [customKitchenUnits]);

  useEffect(() => {
    priceSummery()
}, [price, lining]);



  // * variables and state to handle change in SELECTED units => SelectedUnits component
  const handleInput = (e) => {
    const { value, name, dataset } = e.target;
    setCustomKitchenUnits({
      ...customKitchenUnits,
      [dataset.type]: {
        ...customKitchenUnits[dataset.type],
        [name]: {
          ...customKitchenUnits[dataset.type][name],
          price: parseInt(value) * 10,
          width: parseInt(value),
        },
      },
    });
  };

  

  // delete item from customKitchenUnits
  const handleDelete = (e) => {
    const { dataset, name } = e.target;
    let temp = { ...customKitchenUnits };
    delete temp[dataset.type][name];
    setCustomKitchenUnits({
      ...temp,
    });
  };

  const radioButton = {
    type: "radio",
    name: "lining",
    onChange: handleRadioInput,
  };
  
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
      <div className="walls-drawing">
        <div className="wall" style={wallStyle}>
          <div className="upperUnitsDrawing">
            {upperUnits &&
              Object.keys(upperUnits).map((elem) => (
                <DrawUnit key={elem} info={upperUnits[elem]} />
              ))}
          </div>
          <div className="lowerUnitsDrawing">
            {lowerUnits &&
              Object.keys(lowerUnits).map((elem) => (
                <DrawUnit key={elem} info={lowerUnits[elem]} />
              ))}
          </div>
        </div>
      </div>

      <div className="summery">
        <p>Suma: {priceWithLining}</p>
        <label htmlFor="lining-options">Rodzaj okładziny</label>
        <div name="lining-options" className="radio-form">
          <input {...radioButton} value="lakier" id="lakier" /> Lakierowana
          <input {...radioButton} value="fornir" id="fornir" /> Fornir
          <input {...radioButton} value="melamina" id="melamina" /> Melamina
        </div>
        <button className="btn-1 confirm" onClick={e => handleClick(e)}>
          Zatwierdzam wybór
        </button>
      </div>

      <ul className="upperUnits">
        <UnitsList
          type={upperUnits}
          handleInput={handleInput}
          handleDelete={handleDelete}
        />
      </ul>
      <ul className="lowerUnits">
        <UnitsList
          type={lowerUnits}
          handleInput={handleInput}
          handleDelete={handleDelete}
        />
      </ul>

      <KitchenUnits addNewUnit={addNewUnit} kitchenUnits={kitchenUnits} />
    </div>
  );
};
