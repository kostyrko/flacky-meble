import React from 'react';

const DrawUnit = ({info,handleInput, handleDelete, elem}) => {
  // const {id,width,height,name, typeOfUnits} = info
  const {id, name, width, price, height, typeOfUnits} = info

  const dimensions = {
    width: width,
    border: '1px solid black',
    height: height
  }

  const unitStyle = {
    ...dimensions
  }

  const handleClick = e=> {
    e.preventDefault()
    handleDelete(e)
  }

  return (
    <div className={typeOfUnits} style={unitStyle}>
      <h3>Nazwa {name}</h3>
      <p>nr: {id}</p>
      <p>Cena {price}</p>
      <p>Wysokość {height} cm</p>
      <p>Szerokość {width} cm</p>
      <input type="number" data-type={typeOfUnits} value={width} name={elem} onChange={handleInput}/>
      
      <button  name={elem} data-type={typeOfUnits} onClick={e=>handleClick(e)}className="btn-2 btn-3">Usuń</button>
    </div>
  );
}

export default DrawUnit;
