import React, {useState} from 'react';
import SelectOption from './SelectOption'
import SelectedUnit from './SelectedUnit'

export const KitchenUnits = () => {
  const [upperUnits, setUpperUnits] = useState({ 
    type1 : {
      name: 'typ-1',
      quantity : 0,
      width: 60,
      price: 600,
    },
    type2 : {
      name: 'typ-2',
      quantity : 0,
      width: 55,
      price: 500,
    }
  })
  const [lowerUnits, setLowerUnits] = useState({
    type3 : {
      name: 'typ-3',
      quantity : 0,
      width: 50,
      price: 400,
    },
    type4 : {
      name: 'typ-4',
      quantity : 0,
      width: 45,
      price: 300,
    }
  })
  // const {type1,type2} = upperUnits

  
  const upperUnitTypes = Object.keys(upperUnits)
  const lowerUnitTypes = Object.keys(lowerUnits)

  const handleNumChange = e => {
    const {name, value} = e.target;
    
    if (upperUnitTypes.includes(name)) {
      setUpperUnits({
        ...upperUnits,
        [name] : {
          ...upperUnits[name],
          quantity: parseInt(value)
        }
      })
    } else {
      setLowerUnits({
        ...lowerUnits,
        [name] : {
          ...lowerUnits[name],
          quantity: parseInt(value)
        }
      })
    }
  }

  const selectedUnits = []
  // for (let i=1; i<=wallNum; i++) {
  //   walls.push(
  //   <SelectedUnit key={i} num={i} type={name}/>)
  // }


  
  console.log('upperUnits',upperUnits);
  console.log('lowerUnits',lowerUnits);

  return (
    <div>
      <h2>Szafki wiszące</h2>
      <div className="options">
        {
          upperUnitTypes.map((elem,i)=> {
            const {name, quantity, width, price} = upperUnits[elem]
            return <SelectOption type={elem} key={i} name={name} handleNumChange={handleNumChange} selectedNum={quantity} price={price} width={width}/>
          })
        }
      </div>
      <h2>Szafki stojące</h2>
      <div className="options">
        {
          lowerUnitTypes.map((elem,i)=> {
            const {name, quantity, width, price} = lowerUnits[elem]
            return <SelectOption type={elem} key={i} name={name} handleNumChange={handleNumChange} selectedNum={quantity} price={price} width={width}/>
          })
        }
      </div>
      <div className="chosen-units">
        {selectedUnits}
      </div>
    </div>
  );
}



export default KitchenUnits;

