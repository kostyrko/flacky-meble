import React, {useState} from 'react';

import KitchenUnits from './KitchenUnits'


export const Wall = ({num}) => {
  const [dimensions, setDimensions] = useState({
    width: 100,
    height: 100
  })

  const {width,height} = dimensions

  const wallStyle = {
    backgroundColor: 'gray',
    ...dimensions
  }

  const handleChange = e => {
    const {name, value} = e.target;
    // console.log(name,value);
    setDimensions({
      ...dimensions,
      [name] : parseInt(value),
    })
  }
  // console.log(wallStyle);
  // TODO walidacja -> ściana nie może być mniejsza niż 50
  return (
    <div className="wall-container">
      <h1>Ściana nr {num}</h1>
      <p>proszę wpisać wymiary (w cm)</p>
        <label htmlFor="width">Szerokość ściany w cm</label>
        <input name="width" type="number" value={width} onChange={handleChange}/>
        <label htmlFor="height">Wysokość ściany w cm</label>
        <input name="height" type="number" value={height} onChange={handleChange}/>
      <div className="wall" style={wallStyle}>
      </div>
      <KitchenUnits/>
    </div>    
  );
}


