import React from 'react';

const SelectOption = ({type,handleNumChange, selectedNum}) => {
  // console.log('selectedNum', selectedNum);
  return (
    <div className="option1">
          <h3>Szafka {type}</h3>
          <img src="" alt={type}/>
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
