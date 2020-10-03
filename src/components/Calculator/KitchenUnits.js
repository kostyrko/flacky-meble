import React from 'react';
import SelectOption from './SelectOption'



export const KitchenUnits = (props) => {
  const {addNewUnit,kitchenUnits} = props
  const upperUnitTypes = Object.keys(kitchenUnits.upperUnits);
  const lowerUnitTypes = Object.keys(kitchenUnits.lowerUnits);
  return (
    <div className="kitchen-units">
      <h4>Szafki wiszące</h4>
      <div className="options">
        {
          upperUnitTypes.map((elem,i)=> {
            return <SelectOption type={elem} key={i} info={kitchenUnits.upperUnits[elem]} addNewUnit={addNewUnit} 
              typeOfUnits={'upperUnits'}
            />
          })
        }
      </div>
      <h4>Szafki stojące</h4>
      <div className="options">
        {
          lowerUnitTypes.map((elem,i)=> {
            return <SelectOption type={elem} key={i} info={kitchenUnits.lowerUnits[elem]} addNewUnit={addNewUnit} 
              typeOfUnits={'lowerUnits'}/>
          })
        }
      </div>
    </div>
  );
}



export default KitchenUnits;
