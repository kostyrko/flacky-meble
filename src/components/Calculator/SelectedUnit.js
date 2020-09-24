import React, {useState} from 'react';

const SelectedUnit = ({info, handleInput, handleDelete, elem}) => {
  console.log(info);
  const {id, name, width, price, typeOfUnits} = info


  // const dimensions = {
  //   width: parseInt(newWidth)
  //   height: 50
  // }

  // console.log(dimensions);

  // set new price and with of a unit according to user input
  // const handleChange = e => {
  //   const {value} = e.target
  //   setNewWidth(value)
  //   setNewPrice(value*10)
  // }

  // const unitStyle = {
  //   backgroundColor: 'brown',
  //   ...dimensions
  // }
  const handleClick = e=> {
    e.preventDefault()
    handleDelete(e)
  }

  return (
    <li>
      <h3>Nazwa {name}</h3>
      <p>numer/id: {id}</p>
      <p>Cena {price}</p>
      <p>szerokość {width}</p>
      <input type="number" data-type={typeOfUnits} value={width} name={elem} onChange={handleInput}/>
      <button  name={elem} data-type={typeOfUnits} onClick={e=>handleClick(e)}>Usuń</button>
    </li>
  );
}

export default SelectedUnit;

