import React from 'react';
import SelectOption from './SelectOption'



export const KitchenUnits = (props) => {
  const {addNewUnit,kitchenUnits} = props
  const upperUnitTypes = Object.keys(kitchenUnits.upperUnits);
  const lowerUnitTypes = Object.keys(kitchenUnits.lowerUnits);
  return (
    <div>
      <h2>Szafki wiszące</h2>
      <div className="options">
        {
          upperUnitTypes.map((elem,i)=> {
            const {name, quantity, width, price} = kitchenUnits.upperUnits[elem]
            return <SelectOption type={elem} key={i} name={name} addNewUnit={addNewUnit} selectedNum={quantity} price={price} width={width}
              typeOfUnits={'upperUnits'}
            />
          })
        }
      </div>
      <h2>Szafki stojące</h2>
      <div className="options">
        {
          lowerUnitTypes.map((elem,i)=> {
            const {name, quantity, width, price} = kitchenUnits.lowerUnits[elem]
            return <SelectOption type={elem} key={i} name={name} addNewUnit={addNewUnit} selectedNum={quantity} price={price} width={width} typeOfUnits={'lowerUnits'}/>
          })
        }
      </div>
    </div>
  );
}



export default KitchenUnits;
