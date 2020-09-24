import React from 'react';

const SelectOption = ({name,addNewUnit, price, width, typeOfUnits, type}) => {
  // console.log(typeOfUnits);
  const handleClick = e => {
    e.preventDefault();
    addNewUnit({name:name,price:price, width:width, type:type, typeOfUnits:typeOfUnits})
  }
  return (
    <div className="option">
          <h3>Szafka {name}</h3>
          <p>Cena wyjściowa: {price} pln</p>
          <p>szerokość wyjściowa: {width} cm</p>
          <img src="https://github.com/kostyrko/flacky-meble/blob/dev/img/typ1.jpg?raw=true" alt={name}/>
          <button onClick={e=>handleClick(e)}>Dodaj</button>
    </div>
  );
}

export default SelectOption;
