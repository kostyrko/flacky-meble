import React, {useState} from 'react';

const SelectedUnit = ({type, number}) => {
  const {name, width, price} = type
  const [newWidth, setNewWidth] = useState(width)
  const [newPrice, setNewPrice] = useState(price)

  const dimensions = {
    width: parseInt(newWidth),
    height: 50
  }

  console.log(dimensions);

  const handleChange = e => {
    const {value} = e.target
    setNewWidth(value)
    setNewPrice(value*10)
  }

  const unitStyle = {
    backgroundColor: 'brown',
    ...dimensions
  }

  return (
    <li>
      <div style={unitStyle}></div>
      <h3>{name} numer {number}</h3>
      <p>Cena {newPrice}</p>
      <p>szerokość {newWidth}</p>
      <input type="number" name="" id="" value={newWidth} onChange={handleChange}/>
    </li>
  );
}

export default SelectedUnit;

    {/* <div className="units-drawing">
        <p>Typ 1</p>
        <p>szafka nr ...</p>
    </div>
    <ul className="units-list">
          <p>Typ 1</p>
          <p>ilość {upperUnits["type1"].quantity}</p>

          <li>
            <p>Szafka nr ...</p>
            <label htmlFor="width">Szerokość</label>
            <input name="width" type="number"/>
            <p>cena: cena zmienna i zależna od szerokości</p>
          </li>
    </ul> */}