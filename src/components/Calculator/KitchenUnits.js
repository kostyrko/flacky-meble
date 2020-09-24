import React, {useState} from 'react';
import SelectOption from './SelectOption'
// import SelectedUnit from './SelectedUnit'
// import {kitchenUnits} from './db'


export const KitchenUnits = (props) => {
  const {upperUnitTypes,lowerUnitTypes,handleNumChange,kitchenUnits} = props

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