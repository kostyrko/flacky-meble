import React from 'react';

const SelectOption = ({addNewUnit, typeOfUnits, type, info}) => {
  const {name, height,width, price, src} = info
  // console.log(typeOfUnits);
  const handleClick = e => {
    e.preventDefault();
    addNewUnit({name:name,price:price, width:width, height:height, type:type, typeOfUnits:typeOfUnits})
  }
  return (
    <div className="option">
          <h5>Szafka {name}</h5>
          <p>Cena początkowa: {price} pln</p>
          <p>Wysokość: {height} cm</p>
          <p>Szerokość początkowa: {width} cm</p>
          <img src={src} alt={name}/>
          <button className="btn-1" onClick={e=>handleClick(e)}>Dodaj</button>
    </div>
  );
}

export default SelectOption;
