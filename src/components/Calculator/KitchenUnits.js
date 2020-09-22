import React, {useState} from 'react';
import SelectOption from './SelectOption'

export const KitchenUnits = () => {
  const [upperUnits, setUpperUnits] = useState({
    "typ 1": 0,
    "typ 2": 0
  })
  const [lowerUnits, setLowerUnits] = useState({
    "typ 3": 0,
    "typ 4": 0
  })
  // const {type1,type2} = upperUnits
  const upperUnitTypes = Object.keys(upperUnits)
  const lowerUnitTypes = Object.keys(lowerUnits)

  const handleNumChange = e => {
    const {name, value} = e.target;
    if (upperUnitTypes.includes(name)) {
      setUpperUnits({
        ...upperUnits,
        [name] : parseInt(value)
      })
    } else {
      setLowerUnits({
        ...lowerUnits,
        [name] : parseInt(value)
      })
    }
  }
  
  // console.log(upperUnits, lowerUnits);
  // console.log(upperUnits.typ_1);

  return (
    <div>
      <h2>Szafki wiszące</h2>
      <div className="options">
        {
          upperUnitTypes.map((elem,i)=> {
            return <SelectOption key={i} type={elem} handleNumChange={handleNumChange} selectedNum={upperUnits[elem]}/>
          })
        }
      </div>
      <h2>Szafki stojące</h2>
      <div className="options">
        {
          lowerUnitTypes.map((elem,i)=> {
            return <SelectOption key={i} type={elem} handleNumChange={handleNumChange} selectedNum={lowerUnits[elem]}/>
          })
        }
      </div>
    </div>
  );
}



export default KitchenUnits;

