import React from 'react';
import SelectedUnit from './SelectedUnit'

const UnitsList = ({type, handleInput, handleDelete}) => {
  return (
    <>
      {type &&
        Object.keys(type).map((elem) => (
          <SelectedUnit
            key={elem}
            elem={elem}
            handleInput={handleInput}
            handleDelete={handleDelete}   
            info={type[elem]}
          />
        ))}
    </>
  );
}

export default UnitsList;
