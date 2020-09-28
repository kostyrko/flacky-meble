import React from 'react';

const SelectedUnit = ({info, handleInput, handleDelete, elem}) => {
  const {id, name, width, price, height, typeOfUnits} = info
  // lining
  const handleClick = e=> {
    e.preventDefault()
    handleDelete(e)
  }
  return (
    <li>
      <h3>Nazwa {name}</h3>
      <p>nr: {id}</p>
      <p>Cena {price}</p>
      <p>Wysokość {height} cm</p>
      <p>Szerokość {width} cm</p>
      <input type="number" data-type={typeOfUnits} value={width} name={elem} onChange={handleInput}/>
      
      <button  name={elem} data-type={typeOfUnits} onClick={e=>handleClick(e)}>Usuń</button>
    </li>
  );
}

export default SelectedUnit;

