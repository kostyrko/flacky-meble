import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

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
      <h3>{name}/{id}</h3>
      {/* <p>nr: {id}</p> */}
      <p>{price} PLN</p>
      {/* <p>Wysokość {height} cm</p> */}
      <p>Szer. {width} cm</p>
      <input type="number" data-type={typeOfUnits} value={width} name={elem} onChange={handleInput}/>
      
      <button  name={elem} data-type={typeOfUnits} onClick={e=>handleClick(e)}className="trash"> 
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>
    </div>
  );
}

export default DrawUnit;
