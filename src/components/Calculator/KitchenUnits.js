import React, {useState} from 'react';
import SelectOption from './SelectOption'

export const KitchenUnits = () => {
  const [upperUnits, setUpperUnits] = useState({ 
    type1 : {
      name: 'typ-1',
      quantity : 0,
      price: 600,
    },
    type2 : {
      name: 'typ-2',
      quantity : 0,
      price: 500,
    }
  })
  const [lowerUnits, setLowerUnits] = useState({
    type3 : {
      name: 'typ-3',
      quantity : 0,
      price: 400,
    },
    type4 : {
      name: 'typ-4',
      quantity : 0,
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
  
  console.log('upperUnits',upperUnits);
  console.log('lowerUnits',lowerUnits);

  return (
    <div>
      <h2>Szafki wiszące</h2>
      <div className="options">
        {
          upperUnitTypes.map((elem,i)=> {
            const {name, quantity, price} = upperUnits[elem]
            return <SelectOption type={elem} key={i} name={name} handleNumChange={handleNumChange} selectedNum={quantity} price={price}/>
          })
        }
      </div>
      <h2>Szafki stojące</h2>
      <div className="options">
        {
          lowerUnitTypes.map((elem,i)=> {
            const {name, quantity, price} = lowerUnits[elem]
            return <SelectOption type={elem} key={i} name={name} handleNumChange={handleNumChange} selectedNum={quantity} price={price}/>

          })
        }
      </div>

      <div className="units-drawing">
        <p>Typ 1</p>
        <p>szafka nr ...</p>
      </div>

      <div className="chosen-units">
        <ul className="units-list">
          <p>Typ 1</p>
          <p>ilość {upperUnits["type1"].quantity}</p>

          <li>
            <p>Szafka nr ...</p>
            <label htmlFor="width">Szerokość</label>
            <input name="width" type="number"/>
            <p>cena: cena zmienna i zależna od szerokości</p>
          </li>
        </ul>
      </div>
    </div>
  );
}



export default KitchenUnits;

