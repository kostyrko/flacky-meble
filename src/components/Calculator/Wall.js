import React, {useState} from 'react';

export const Wall = ({num}) => {
  const [dimensions, setDimensions] = useState({
    width: 100,
    height: 100
  })

  const wallStyle = {
    backgroundColor: 'gray',
    ...dimensions
  }
  // TODO walidacja -> ściana nie może być mniejsza niż 50
  return (
    <div className="wall-container">
      <h1>Ściana nr {num}</h1>
      <p>proszę wpisać wymiary (w cm)</p>
      // TODO zmiana wymiarów ściany
      <form action="">
        <input type="text"/>
        <input type="text"/>
      </form>
      <div className="wall" style={wallStyle}>
      </div>
    </div>    
  );
}


