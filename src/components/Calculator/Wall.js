import React, {useState} from 'react';
import {kitchenUnits} from './db'
import KitchenUnits from './KitchenUnits'
import SelectedUnit from './SelectedUnit'


export const Wall = ({num}) => {
  const [dimensions, setDimensions] = useState({
    width: 400,
    height: 250
  })

  const {width,height} = dimensions

  const wallStyle = {
    backgroundColor: 'lightgray',
    ...dimensions
  }

  const handleChange = e => {
    const {name, value} = e.target;
    // console.log(name,value);
    setDimensions({
      ...dimensions,
      [name] : parseInt(value),
    })
  }

  // variables and state to handle KitchenUnits component
  const [customKitchenUnits, setCustomKitchenUnits] = useState({})
  const {upperUnits, lowerUnits} = customKitchenUnits
  const upperUnitTypes = Object.keys(kitchenUnits.upperUnits)
  const lowerUnitTypes = Object.keys(kitchenUnits.lowerUnits)

  // add units to customKitchenUnits -> passed to -> SelectedUnit
  const handleNumChange = e => {
    const {name, value} = e.target;
    const upper = kitchenUnits.upperUnits[name]
    const lower = kitchenUnits.lowerUnits[name]
    if (upperUnitTypes.includes(name)) {
      setCustomKitchenUnits({
        ...customKitchenUnits,
        "upperUnits" : {
          ...customKitchenUnits["upperUnits"],
          [name] : {
            name: upper.name,
            width: upper.width,
            price: upper.price,
            quantity: parseInt(value)
          }
        }
      })
      } else {
        setCustomKitchenUnits({
          ...customKitchenUnits,
          "lowerUnits" : {
            ...customKitchenUnits["lowerUnits"],
            [name] : {
              name: lower.name,
              width: lower.width,
              price: lower.price,
              quantity: parseInt(value)
            }
          }
        })
      }
  }

  // if kitchen units selected create SelectedUnit component
  const selectedUnits = []
  if (upperUnits!==undefined) {
    const customUpperKitchenUnitsArr = Object.keys(upperUnits)
    customUpperKitchenUnitsArr.forEach(elem=>
      {
        for (let i=1; i<=upperUnits[elem].quantity; i++) {
          selectedUnits.push(<SelectedUnit type={upperUnits[elem]} number={i} key={upperUnits[elem].name+i}/>)
      }
    })
    if (lowerUnits!==undefined) {
      const customLowerKitchenUnitsArr = Object.keys(lowerUnits)
      customLowerKitchenUnitsArr.forEach(elem=>
        {
          for (let i=1; i<=lowerUnits[elem].quantity; i++) {
            selectedUnits.push(<SelectedUnit type={lowerUnits[elem]} number={i} key={lowerUnits[elem].name+i}/>)
        }
      })
    }
  }

  // variables and state to handle UnitsDrawing compontnet

  
  // console.log(wallStyle);
  // TODO walidacja -> ściana nie może być mniejsza niż 50
  return (
    <div className="wall-container">
      <KitchenUnits upperUnitTypes={upperUnitTypes} lowerUnitTypes={lowerUnitTypes} handleNumChange={handleNumChange} kitchenUnits={kitchenUnits}/>
      <h2>Ściana nr {num}</h2>
      <p>proszę wpisać wymiary (w cm)</p>
        <label htmlFor="width">Szerokość ściany w cm</label>
        <input name="width" type="number" value={width} onChange={handleChange}/>
        <label htmlFor="height">Wysokość ściany w cm</label>
        <input name="height" type="number" value={height} onChange={handleChange}/>
      <div className="wall" style={wallStyle}>
      
      </div>
      <div className="chosen-units">
        <ul>
          {selectedUnits}
        </ul>
      </div>
    </div>    
  );
}


