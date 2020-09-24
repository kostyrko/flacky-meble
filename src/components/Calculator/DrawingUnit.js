import React from 'react';

const DrawingUnit = ({info}) => {
  const {id,width,name,typeOfUnits} = info
  const dimensions = {
    width: width,
    border: '1px solid black',
    height: 100
  }

  const unitStyle = {
    // backgroundColor: 'brown',
    ...dimensions
  }

  return (
    <div className={typeOfUnits} style={unitStyle}>
      <p>{name}</p>
      <p>{id}</p>
    </div>
  );
}

export default DrawingUnit;
