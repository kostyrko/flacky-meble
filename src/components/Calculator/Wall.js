import React, { useState, useEffect } from "react";
import { kitchenUnits } from "./db";
import KitchenUnits from "./KitchenUnits";
import DrawUnit from "./DrawUnit";


export const Wall = ({ num, handleConfirmation }) => {
  // * handle wall dimensions
  const [dimensions, setDimensions] = useState({
    width: 450,
    height: 250,
  });

  const [zoom, setZoom] = useState({
    transform: `translate(1.5)`,
    margin: `150px 0`
  })

  const { width, height } = dimensions;

  let wallStyle = {
    backgroundColor: "lightgray",
    ...dimensions,
  };

  useEffect(() => {
    if (window.matchMedia("(max-width: 400px)").matches) {
      console.log("matches");
      setDimensions({
        height: 250,
        width: 250,
      });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name,value);
    setDimensions({
      ...dimensions,
      [name]: parseInt(value),
    });
  };

  const handleClick = (e) => {
    console.log("clicked");
    e.preventDefault();
    handleConfirmation(
      customKitchenUnits,
      priceWithLining,
      lining,
      num,
      dimensions
    );
  };

  // * variables and state to handle selection of units => SelectOption component
  const [customKitchenUnits, setCustomKitchenUnits] = useState({});
  const { lowerUnits, upperUnits } = customKitchenUnits;
  const [id, setId] = useState(1);

  const [price, setPrice] = useState(0);
  const [priceWithLining, setPriceWithLining] = useState(0);
  const [lining, setLining] = useState("lakier");

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
  };

  const handleRadioInput = (e) => {
    const { value } = e.target;
    console.log("value handleRadioInput:", value);
    setLining(value);
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
    const newPrice = price + temp;
    // console.log('price priceSummery:',price)
    setPriceWithLining(newPrice);
    // console.log(priceWithLining);
  };

  // every time customKitchenUnits change get new price
  useEffect(() => {
    getPrice();
  }, [customKitchenUnits, getPrice]);

  useEffect(() => {
    priceSummery();
  }, [price, lining, priceSummery]);

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
    console.log(e.target);
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
      <h3>Ściana nr {num}</h3>
      <KitchenUnits addNewUnit={addNewUnit} kitchenUnits={kitchenUnits} />
      <p>proszę wpisać wymiary (w cm)</p>
      <label htmlFor="width">Szerokość ściany w cm</label>
      <input
        name="width"
        type="number"
        value={width}
        onChange={handleChange}
        className="cm-input"
      />
      <label htmlFor="height">Wysokość ściany w cm</label>
      <input
        name="height"
        type="number"
        value={height}
        onChange={handleChange}
        className="cm-input"
      />
      <div className="walls-drawing">
        <div className="wall" style={wallStyle}>
          <div className="upperUnitsDrawing">
            {upperUnits &&
              Object.keys(upperUnits).map((elem) => (
                <DrawUnit key={elem} info={upperUnits[elem]} handleInput={handleInput} handleDelete={handleDelete} elem={elem} />
              ))}
          </div>
          <div className="lowerUnitsDrawing">
            {lowerUnits &&
              Object.keys(lowerUnits).map((elem) => (
                <DrawUnit key={elem} info={lowerUnits[elem]} handleInput={handleInput} handleDelete={handleDelete} elem={elem} />
              ))}
          </div>
        </div>
      </div>

      <div className="summery">
        <p>Suma: {priceWithLining}</p>
        <label htmlFor="lining-options">Rodzaj okładziny</label>
        <div name="lining-options" className="radio-form">
          <input {...radioButton} value="lakier" id="lakier" defaultChecked /> Lakierowana
          <input {...radioButton} value="fornir" id="fornir" /> Fornir
          <input {...radioButton} value="melamina" id="melamina" /> Melamina
        </div>
        <button className="btn-1 confirm" onClick={(e) => handleClick(e)}>
          Zatwierdzam wybór
        </button>
      </div>
    </div>
  );
};
