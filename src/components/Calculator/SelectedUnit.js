import React, {useState} from 'react';

const SelectedUnit = ({type, number}) => {
  const {name, width, price} = type
  const [newWidth, setNewWidth] = useState(width)
  const [newPrice, setNewPrice] = useState(price)

  const dimensions = {
    width: parseInt(newWidth),
    height: 50
  }

  // console.log(dimensions);

  // set new price and with of a unit according to user input
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

