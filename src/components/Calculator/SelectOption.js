import React from 'react';

const SelectOption = ({type, name,handleNumChange, selectedNum, price}) => {
  // console.log('selectedNum', selectedNum);
  return (
    <div className="option1">
          <h3>Szafka {name}</h3>
          <p>Cena wyjściowa: {price} pln</p>
          <img src="https://github.com/kostyrko/flacky-meble/blob/dev/img/typ1.jpg?raw=true" alt={name}/>
          <select name={type} value={selectedNum} onChange={handleNumChange}>
            <option value="">Wybierz ilość</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="3">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
    </div>
  );
}

export default SelectOption;
