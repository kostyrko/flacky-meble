import React from 'react';

const DrawUnit = ({info}) => {
  const {id,width,height,name, typeOfUnits} = info
  
  const dimensions = {
    width: width,
    border: '1px solid black',
    height: height
  }

  const unitStyle = {
    ...dimensions
  }

  return (
    <div className={typeOfUnits} style={unitStyle}>
      <p>{name}</p>
      <p>nr {id}</p>
    </div>
  );
}

export default DrawUnit;
