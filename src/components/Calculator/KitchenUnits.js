import React, {useState} from 'react';
import SelectOption from './SelectOption'
import SelectedUnit from './SelectedUnit'
import {kitchenUnits} from './db'


export const KitchenUnits = () => {

  const [customKitchenUnits, setCustomKitchenUnits] = useState({})
  const {upperUnits, lowerUnits} = customKitchenUnits


  const upperUnitTypes = Object.keys(kitchenUnits.upperUnits)
  const lowerUnitTypes = Object.keys(kitchenUnits.lowerUnits)

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


  const selectedUnits = []
  if (upperUnits!==undefined) {
    const customUpperKitchenUnitsArr = Object.keys(upperUnits)
    // console.log('1',Object.keys(customKitchenUnits.upperUnits));
    console.log('1',customUpperKitchenUnitsArr);
    customUpperKitchenUnitsArr.forEach(elem=>
      {
        for (let i=1; i<=upperUnits[elem].quantity; i++) {
          selectedUnits.push(<SelectedUnit type={upperUnits[elem]} number={i} key={upperUnits[elem].name+i}/>)
      }
    })
  }
  // console.log('1',customKitchenUnits.upperUnits);
  



  return (
    <div>
      <h2>Szafki wiszące</h2>
      <div className="options">
        {
          upperUnitTypes.map((elem,i)=> {
            const {name, quantity, width, price} = kitchenUnits.upperUnits[elem]
            return <SelectOption type={elem} key={i} name={name} handleNumChange={handleNumChange} selectedNum={quantity} price={price} width={width}/>
          })
        }
      </div>
      <h2>Szafki stojące</h2>
      <div className="options">
        {
          lowerUnitTypes.map((elem,i)=> {
            const {name, quantity, width, price} = kitchenUnits.lowerUnits[elem]
            return <SelectOption type={elem} key={i} name={name} handleNumChange={handleNumChange} selectedNum={quantity} price={price} width={width}/>
          })
        }
      </div>
      <div className="chosen-units">
        <ul>
          {selectedUnits}
        </ul>
      </div>
    </div>
  );
}



export default KitchenUnits;



// const selectedUnitsUpper = Object.keys(customKitchenUnits.upperUnits)
  // const upperKeys = customKitchenUnits.upperUnits
  // if (Object.keys(upperKeys).length) {
  //   console.log('upperKeys',Object.keys(upperKeys));  
  // }
  // console.log(customKitchenUnits.upperUnits);
  // console.log('upperKeys',Object.keys(upperKeys));
  
  // for (let i=1; i<=wallNum; i++) {
  //   walls.push(
  //   <SelectedUnit key={i} num={i} type={name}/>)
  // }
  // const selectedUnits1 = Object.keys(customKitchenUnits)
  // selectedUnits1.forEach(elem=>
  //   selectedUnits.push(Object.keys(customKitchenUnits[elem]))
  // )
  
  // console.log('selected',selectedUnitsUpper);

  
  // console.log('upperUnits',kitchenUnits.upperUnits);
  // console.log('lowerUnits',kitchenUnits.lowerUnits);
  // console.log('customKitchenUnits',customKitchenUnits);