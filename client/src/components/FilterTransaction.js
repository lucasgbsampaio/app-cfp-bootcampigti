import React from 'react';

export default function FilterTransaction({ textFilter, onChangeText }) {
  const handleText = (event) => {
    const newText = event.target.value;
    onChangeText(newText);
  };

  return (
    <div style={{ margin: '10px' }}>
      <input
        type="text"
        placeholder="Filtro"
        value={textFilter}
        onChange={handleText}
      ></input>
    </div>
  );
}
